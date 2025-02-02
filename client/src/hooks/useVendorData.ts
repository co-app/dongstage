import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { DeserializedData } from "../logic";

const MockingURL = "/data/data.json";

const getVendorData = async (url: string, isTest: boolean) => {
  const response = await axios.get(isTest ? MockingURL : url);
  return response.data;
};

export const useVendorData = (url: string, isTest = false) => {
  const {
    data,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["vendorData", url, isTest],  
    queryFn: () => getVendorData(url, isTest),  
    staleTime: 10000,  
    retry: 1,         
  });

  const formattedData: DeserializedData[] = data?.projects ?? [];

  return { data: formattedData, loading, error };
};
