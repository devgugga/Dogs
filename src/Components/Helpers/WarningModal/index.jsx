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
            Por se tratar de uma API pública, não tenho controle sobre as
            imagens ou comentários que foram ou serão postados. A API realiza
            uma limpeza automática a cada 10 minutos, excluindo todas as
            imagens, comentários e dados de usuários do sistema.
          </p>
        </section>
        <button onClick={handleButtonClick} className={styles.button}>
          Eu Entendo
        </button>
      </div>
    </div>
  );
}
