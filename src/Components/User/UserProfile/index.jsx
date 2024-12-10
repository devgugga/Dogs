import { useParams } from "react-router-dom";
import { Feed } from "../../Feeds/Feed/index.jsx";

export function UserProfile() {
  const { user } = useParams();

  return (
    <section className="container mainSection">
      <h1 style={{ textTransform: "capitalize" }} className="title">
        {user}
      </h1>
      <Feed user={user} />
      <p> </p>
    </section>
  );
}
