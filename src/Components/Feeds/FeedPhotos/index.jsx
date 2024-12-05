import { FeedPhotosItem } from "../FeedPhotosItem/index.jsx";
import { useFetch } from "../../../Hooks/useFetch.jsx";
import { useEffect } from "react";
import { PHOTOS_GET } from "../../../Utils/api.js";
import Error from "../../Helpers/Error/index.jsx";
import { Loading } from "../../Helpers/Loading/index.jsx";
import styles from "./FeedPhotos.module.css";

export function FeedPhotos() {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ul className={`${styles.feed} animateLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  } else return null;
}
