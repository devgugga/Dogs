import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch.jsx";
import { useEffect } from "react";
import { PHOTO_GET } from "../../Utils/api.js";
import Error from "../../Components/Helpers/Error/index.jsx";
import { Loading } from "../../Components/Helpers/Loading/index.jsx";
import { PhotoContent } from "../../Components/Photos/PhotoContent/index.jsx";
import { Head } from "../../Components/Helpers/Head.jsx";

export function Photo() {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
}
