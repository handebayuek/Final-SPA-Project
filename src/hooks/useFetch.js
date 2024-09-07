import { useEffect, useState } from "react";

export function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // why is true? because we are fetching data
      try {
        const response = await fetch("./data.json"); 
        if (!response.ok) { // what is response.ok? it is a boolean that indicates if the response was successful (status in the range 200-299) or not
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // why is false? because we are done fetching data
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}