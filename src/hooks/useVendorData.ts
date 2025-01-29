import axios from "axios";
import { useEffect, useState } from "react";
import { DeserializedData } from "../logic";

const MockingURL = "/data/data.json";

export const useVendorData = (url: string, isTest = false) => {
  const [data, setData] = useState<DeserializedData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const getVendorData = async (url: string, isTest = false) => {
    let res = null;

    if (isTest) {
      res = await axios.get(MockingURL);
    } else {
      res = await axios.get(url);
    }

    return res.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getVendorData(url, isTest);
        setData(result.projects);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
