import { Character } from "../../interfaces/Character";
import { Link } from "react-router-dom";
import "./HCard.css";

type Props = {
  item: Character;
};

const HCard = ({ item }: Props) => {
  return (
    
    <Link to={`/character/${item.id}`} className="hcard">
        <img className="hcard-image" src={item.image}></img>
        <h3 className="hcard-name">{item.name}</h3>
    </Link>
  );
};

export default HCard;
