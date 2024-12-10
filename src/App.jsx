import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { UserStorage } from "./Context/UserContext";
import { ProtectedRoute } from "./Components/Helpers/ProtectedRoute.jsx";
import { User } from "./Pages/User/index.jsx";
import { WarningModal } from "./Components/Helpers/WarningModal/index.jsx";
import { Photo } from "./Pages/Photo/index.jsx";
import { UserProfile } from "./Components/User/UserProfile/index.jsx";
import { NotFound } from "./Pages/NotFound/NotFound.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <WarningModal />
          <main className="AppBody">
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
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}
export default App;
