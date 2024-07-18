import { Character } from "../../interfaces/Character";
import { Link } from "react-router-dom";
import "./HCard.css";

type Props = {
  item: Character;
};

const HCard = ({ item }: Props) => {
  return (
    
    <Link to={`/character/${item.id}`} className="button-link">
      <div className="card-horizontal">
        <div className="amiibo-image-horizontal-holder">
          <img className="amiibo-image-horizontal" src={item.image}></img>
        </div>
        <div className="amiibo-name-horizontal-holder">
          <h3 className="amiibo-name-horizontal">{item.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default HCard;
