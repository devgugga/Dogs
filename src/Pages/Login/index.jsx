import { Route, Routes } from "react-router-dom";
import LoginForm from "../../Components/Login/LoginForm";
import LoginCreate from "../../Components/Login/LoginCreate";
import LoginPasswordLost from "../../Components/Login/LoginPasswordLost";
import LoginPasswordReset from "../../Components/Login/LoginPasswordReset";

export default function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}
