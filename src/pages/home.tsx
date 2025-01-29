import { useEffect, useState } from "react";
import { getVendorData } from "../hooks/data";
import { DeserializedData } from "../logic";

export default function Home() {
  const [vendorData, setVendorData] = useState<DeserializedData[]>();

  console.log(vendorData);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVendorData("", true);
      setVendorData(data["projects"]);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>home 페이지</h1>
    </div>
  );
}
