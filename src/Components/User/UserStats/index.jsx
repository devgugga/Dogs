import { Head } from "../../Helpers/Head.jsx";
import { useFetch } from "../../../Hooks/useFetch.jsx";
import { lazy, Suspense, useEffect } from "react";
import { STATS_GET } from "../../../Utils/api.js";
import { Loading } from "../../Helpers/Loading/index.jsx";
import Error from "../../Helpers/Error/index.jsx";

const UserStatsGraphs = lazy(() => import("../UserStatsGraphs/index.jsx"));

export function UserStats() {
  const { data, error, loading, request } = useFetch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <Suspense fallback={<Loading />}>
        <Head title="Estastíticas" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  } else return null;
}
