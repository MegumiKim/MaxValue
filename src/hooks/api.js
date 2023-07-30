import { useEffect, useState } from "react";

export function useApi(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch(url);
        const json = await res.json();

        if (res.ok) {
          setData(json);
        } else {
          throw new Error(json.errors);
        }
      } catch (e) {
        console.log(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [url]);

  return { data, loading, error };
}
