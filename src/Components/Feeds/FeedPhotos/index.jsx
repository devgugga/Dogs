import { FeedPhotosItem } from "../FeedPhotosItem/index.jsx";
import { useFetch } from "../../../Hooks/useFetch.jsx";
import { useEffect } from "react";
import { PHOTOS_GET } from "../../../Utils/api.js";
import Error from "../../Helpers/Error/index.jsx";
import { Loading } from "../../Helpers/Loading/index.jsx";
import styles from "./FeedPhotos.module.css";

export function FeedPhotos({ user, page, setModalPhoto, setInfinite }) {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 6;

      const { url, options } = PHOTOS_GET({
        page: page,
        total: total,
        user: user,
      });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ul className={`${styles.feed} animateLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  } else return null;
}
