import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../Context/UserContext.jsx";
import { PhotoCommentsForm } from "../PhotoCommentsForm/index.jsx";
import styles from "./PhotoComment.module.css";

export function PhotoComments({ id, comments, single }) {
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
