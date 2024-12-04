import styles from "./UserPhotoPost.module.css";
import Input from "../../Forms/Input/index.jsx";
import Button from "../../Forms/Button/index.jsx";
import useForm from "../../../Hooks/useForm.jsx";
import { useEffect, useState } from "react";
import { useFetch } from "../../../Hooks/useFetch.jsx";
import { PHOTO_POST } from "../../../Utils/api.js";
import Error from "../../Helpers/Error/index.jsx";
import { useNavigate } from "react-router-dom";

export function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");

  const navigate = useNavigate();

  const { data, error, loading, request } = useFetch();

  const [img, setImg] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImageChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  return (
    <section className={`${styles.photoPost} animateLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <label htmlFor="img" className={styles.fileLabel}>
          Selecionar imagem
        </label>
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImageChange}
          accept="image/jpeg, image/png"
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}

        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
}
