import { useEffect, useState } from "react";

const useServiceDetails = (Id) => {
  const [service, setService] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/service/${Id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setService(data);
      });
  }, [Id]);

  return [service ];
};


export default useServiceDetails;