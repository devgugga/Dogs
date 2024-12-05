import { FeedModal } from "../FeedModal/index.jsx";
import { FeedPhotos } from "../FeedPhotos/index.jsx";
import { useState } from "react";

export function Feed() {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
}
