import styles from "./PhotoContent.module.css";
import { Link } from "react-router-dom";
import { PhotoComments } from "../PhotoComments/index.jsx";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext.jsx";
import { PhotoDelete } from "../PhotoDelete/index.jsx";
import { Image } from "../../Helpers/Image/index.jsx";

import PropTypes from "prop-types";

export function PhotoContent({ data, single = false }) {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : null}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </div>
  );
}

PhotoContent.propTypes = {
  data: PropTypes.shape({
    photo: PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      acessos: PropTypes.number.isRequired,
      peso: PropTypes.string.isRequired,
      idade: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
    }).isRequired,
    comments: PropTypes.array.isRequired,
  }).isRequired,
  single: PropTypes.bool,
};
