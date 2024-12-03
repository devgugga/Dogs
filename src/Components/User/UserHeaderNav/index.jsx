import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../Context/UserContext.jsx";
import MinhasFotos from "../../../Assets/feed.svg?react";
import Estatisticas from "../../../Assets/estatisticas.svg?react";
import AdicionarFoto from "../../../Assets/adicionar.svg?react";
import Sair from "../../../Assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";

export function UserHeaderNav() {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);

  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {mobile && "Estatisticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarFoto />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={handleLogout}>
        <Sair />
        {mobile && "Sair"}
      </button>
    </nav>
  );
}
