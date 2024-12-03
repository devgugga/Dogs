import Button from "../../Forms/Button";
import Input from "../../Forms/Input";
import useForm from "../../../Hooks/useForm";
import { USER_POST } from "../../../Utils/api.js";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext.jsx";
import { useFetch } from "../../../Hooks/useFetch.jsx";
import Error from "../../Helpers/Error/index.jsx";

export default function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = useContext(UserContext);

  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response, json } = await request(url, options);

    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome do Usuário"
          type="text"
          name="username"
          {...username}
        />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
}
