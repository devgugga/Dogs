import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "../../Components/Login/LoginForm";
import LoginCreate from "../../Components/Login/LoginCreate";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import styles from "./Login.module.css";
import { NotFound } from "../NotFound/NotFound.jsx";
import LoginPasswordLost from "../../Components/Login/LoginPasswordLost/index.jsx";
import LoginPasswordReset from "../../Components/Login/LoginPasswordReset/index.jsx";

export default function Login() {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}
