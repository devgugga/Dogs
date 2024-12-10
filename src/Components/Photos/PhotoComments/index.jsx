import { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../../../Context/UserContext.jsx";
import { PhotoCommentsForm } from "../PhotoCommentsForm/index.jsx";
import styles from "./PhotoComment.module.css";

export function PhotoComments({ id, comments, single = false }) {
  const [comment, setComment] = useState(() => comments);
  const commentsSection = useRef();
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comment]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : null}`}
      >
        {comment.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm id={id} setComments={setComment} single={single} />
      )}
    </>
  );
}

PhotoComments.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      comment_ID: PropTypes.string,
      comment_author: PropTypes.string,
      comment_content: PropTypes.string,
    }),
  ).isRequired,
  single: PropTypes.bool.isRequired,
};
