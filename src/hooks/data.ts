import axios from "axios";

const MockingURL = "/data/data.json";

export const getVendorData = async (url: string, isTest = false) => {
  let res = null;

  if (isTest) {
    res = await axios.get(MockingURL);
  } else {
    res = await axios.get(url);
  }

  return res.data;
};
