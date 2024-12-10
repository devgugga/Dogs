import PropTypes from "prop-types";
import styles from "./FeedModal.module.css";
import { useFetch } from "../../../Hooks/useFetch.jsx";
import { useEffect } from "react";
import { PHOTO_GET } from "../../../Utils/api.js";
import Error from "../../Helpers/Error/index.jsx";
import { Loading } from "../../Helpers/Loading/index.jsx";
import { PhotoContent } from "../../Photos/PhotoContent/index.jsx";

export function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}

FeedModal.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  setModalPhoto: PropTypes.func.isRequired,
};
