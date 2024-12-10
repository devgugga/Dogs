import { useEffect, useState } from "react";
import Input from "../../Forms/Input/index.jsx";
import useForm from "../../../Hooks/useForm.jsx";
import Button from "../../Forms/Button/index.jsx";
import { PASSWORD_RESET } from "../../../Utils/api.js";
import { useFetch } from "../../../Hooks/useFetch.jsx";
import Error from "../../Helpers/Error/index.jsx";
import { useNavigate } from "react-router-dom";
import { Head } from "../../Helpers/Head.jsx";

export default function LoginPasswordReset() {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");

  const { loading, error, request } = useFetch();

  const password = useForm("password");
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const login = params.get("login");
    const key = params.get("key");

    if (login) setLogin(login);
    if (key) setKey(key);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login: login,
        key: key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animateLeft">
      <Head title="Redefinir Senha" />
      <h1 className="title">Redefinir Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
          value={password.value}
        />
        {loading ? (
          <Button disabled>Redefinindo...</Button>
        ) : (
          <Button>Redefinir Senha</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
}
