import { UserHeader } from "../../Components/User/UserHeader/index.jsx";
import { Route, Routes } from "react-router-dom";
import { Feed } from "../../Components/Feeds/Feed/index.jsx";
import { UserPhotoPost } from "../../Components/User/UserPhotoPost/index.jsx";
import { UserStats } from "../../Components/User/UserStats/index.jsx";

export function User() {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
}
