import { Amiibo } from "../../interfaces/Amiibo";
import "./HCard.css";

interface Props {
  amiibo: Amiibo;
}

const HCard = ({ amiibo }: Props) => {
  return (
    <div className="card-horizontal">
      <div className="amiibo-image-horizontal-holder">
        {<img className="amiibo-image-horizontal" src={amiibo.image}></img>}
      </div>
      <div className="amiibo-name-horizontal-holder">
        {<h3 className="amiibo-name-horizontal">{amiibo.name}</h3>}
      </div>
    </div>
  );
};

export default HCard;
