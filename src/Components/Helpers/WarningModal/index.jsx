import styles from "./WarningModal.module.css";
import { useEffect, useState } from "react";

export function WarningModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const token = localStorage.getItem("token");

  function handleButtonClick() {
    setModalOpen(!modalOpen);
  }

  useEffect(() => {
    if (!token) setModalOpen(true);
  }, [token]);

  return (
    <div className={modalOpen ? styles.modal_overlay : styles.modal_closed}>
      <div className={styles.modal}>
        <h2>API Pública</h2>
        <p>Este projeto foi feito utilizando uma API Pública!</p>
        <section className={styles.warning}>
          <h3>Aviso</h3>
          <p>
            Como a API é pública eu não tenho nem um controle sobre as imagens
            que foi ou serão postadas. A API também exclui as imagens e usuários
            de 10 em 10 minutos!
          </p>
        </section>
        <button onClick={handleButtonClick} className={styles.button}>
          Eu Entendo
        </button>
      </div>
    </div>
  );
}
