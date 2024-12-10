import { Feed } from "../../Components/Feeds/Feed/index.jsx";
import { Head } from "../../Components/Helpers/Head.jsx";

export default function Home() {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site dogs, com as fotos mais recentes do mundo do cachorro"
      />
      <Feed />
    </section>
  );
}
