import styles from "./FeedPhotosItem.module.css";
import PropTypes from "prop-types";
import { Image } from "../../Helpers/Image/index.jsx";

export function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
}

FeedPhotosItem.propTypes = {
  photo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    acessos: PropTypes.string.isRequired,
  }).isRequired,
  setModalPhoto: PropTypes.func.isRequired,
};
