import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { UserStorage } from "./Context/UserContext";
import { ProtectedRoute } from "./Components/Helpers/ProtectedRoute.jsx";
import { User } from "./Pages/User/index.jsx";
import { WarningModal } from "./Components/Helpers/WarningModal/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <WarningModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route
            path="conta/*"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}
export default App;
