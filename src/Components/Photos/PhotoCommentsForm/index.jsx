import { useState } from "react";
import Enviar from "../../../Assets/enviar.svg?react";
import { useFetch } from "../../../Hooks/useFetch.jsx";
import { COMMENT_POST } from "../../../Utils/api.js";
import Error from "../../Helpers/Error/index.jsx";
import styles from "./PhotoCommentForm.module.css";
import PropTypes from "prop-types";

export function PhotoCommentsForm({ id, setComments, single = false }) {
  const { request, error } = useFetch();
  const token = localStorage.getItem("token");

  const [comment, setComment] = useState("");

  async function handleOnSubmit(event) {
    event.preventDefault();

    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comment) => [...comment, json]);
    }
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className={`${styles.form} ${single ? styles.single : null}`}
    >
      <textarea
        id={comment.comment_ID}
        name="comment"
        placeholder="Coment..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        className={styles.textarea}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
}

PhotoCommentsForm.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  setComments: PropTypes.func.isRequired,
  single: PropTypes.bool,
};
