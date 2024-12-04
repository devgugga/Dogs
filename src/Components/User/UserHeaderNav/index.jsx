import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/UserContext.jsx";
import MinhasFotos from "../../../Assets/feed.svg?react";
import Estatisticas from "../../../Assets/estatisticas.svg?react";
import AdicionarFoto from "../../../Assets/adicionar.svg?react";
import Sair from "../../../Assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";
import { useMedia } from "../../../Hooks/useMedia.jsx";

export function UserHeaderNav() {
  const { userLogout } = useContext(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobile = useMedia("(max-width: 40rem)");
  const navigate = useNavigate();

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}
      >
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
    </>
  );
}
