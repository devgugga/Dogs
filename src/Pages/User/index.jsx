import { UserHeader } from "../../Components/User/UserHeader/index.jsx";
import { Route, Routes } from "react-router-dom";
import { Feed } from "../../Components/Feeds/Feed/index.jsx";
import { UserPhotoPost } from "../../Components/User/UserPhotoPost/index.jsx";
import { UserStats } from "../../Components/User/UserStats/index.jsx";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext.jsx";

export function User() {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
}
