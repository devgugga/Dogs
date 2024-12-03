import { UserHeaderNav } from "../UserHeaderNav/index.jsx";
import styles from "./UserHeader.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function UserHeader() {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case "/conta":
        setTitle("Minha Conta");
        break;
      case "/conta/postar":
        setTitle("Adicionar Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}
