import { useCallback, useState } from "react";

export function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();

      if (response.ok === false) throw new Error(json.message);
    } catch (e) {
      json = null;

      setError(e.message);
    } finally {
      setData(json);
      setLoading(false);

      return { response, json };
    }
  }, []);

  return { data, error, loading, request };
}
