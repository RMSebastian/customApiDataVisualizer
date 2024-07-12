import { useEffect, useState } from "react";
import "./AmiiboList.css";
import { Amiibo, AmiiboApiResponse } from "../../interfaces/Amiibo";
import ListGroup from "../../components/ListGroup/ListGroup";

const AmiiboList = () => {
  const [amiibos, setAmiibos] = useState<Amiibo[]>([]);

  useEffect(() => {
    fetch(`https://www.amiiboapi.com/api/amiibo/`)
      .then((response) => response.json())
      .then((data: AmiiboApiResponse) => {
        setAmiibos(data.amiibo);
      })
      .catch((err) => console.log(err));
  }, []);

  const names = amiibos.map((amiibo) => amiibo.name);
  console.log(names);
  return (
    <div className="app">
      <div>
        <ListGroup key={1} items={amiibos} heading="Amiibos"></ListGroup>
      </div>
    </div>
  );
};

export default AmiiboList;
