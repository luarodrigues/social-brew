import { useState, useEffect } from "react";
//FE

export default function TestPage() {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("getting the data");

    const fetchData = async () => {
      const response = await fetch("api/test?name=Shane&dog=Lupita");
      const data = await response.text();

      setData(data);
    };
    fetchData();
  }, []);

  return <div>{data}</div>;
}
