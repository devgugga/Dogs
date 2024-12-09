import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../../Utils/api.js";
import { useFetch } from "../../../Hooks/useFetch.jsx";

export function PhotoDelete({ id }) {
  const token = localStorage.getItem("token");

  const { loading, request } = useFetch();

  async function handleClick(event) {
    const confirm = window.confirm("Deseja realmente deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
}
