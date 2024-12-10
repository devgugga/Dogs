import Input from "../../Forms/Input/index.jsx";
import Button from "../../Forms/Button/index.jsx";
import useForm from "../../../Hooks/useForm.jsx";
import { useFetch } from "../../../Hooks/useFetch.jsx";
import { PASSWORD_LOST } from "../../../Utils/api.js";
import Error from "../../Helpers/Error/index.jsx";
import { Head } from "../../Helpers/Head.jsx";

export default function LoginPasswordLost() {
  const login = useForm("text");
  const { data, loading, error, request } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });

      request(url, options);
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "green" }}>Email enviado com sucesso</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label="Email / Usuário"
            type="text"
            name="email"
            {...login}
            value={login.value}
          />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
}
