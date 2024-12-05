import styles from "./FeedPhotosItem.module.css";

export function FeedPhotosItem({ photo }) {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
}
