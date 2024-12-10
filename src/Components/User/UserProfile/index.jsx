import { useParams } from "react-router-dom";
import { Feed } from "../../Feeds/Feed/index.jsx";
import { Head } from "../../Helpers/Head.jsx";

export function UserProfile() {
  const { user } = useParams();

  return (
    <section className="container mainSection">
      <Head title={user} />
      <h1 style={{ textTransform: "capitalize" }} className="title">
        {user}
      </h1>
      <Feed user={user} />
      <p> </p>
    </section>
  );
}
