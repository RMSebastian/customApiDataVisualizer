import { Link } from "react-router-dom";
import "./Card.css";
import { Character } from "../../interfaces/Character";
type Props = {
  item: Character;
}

const Card = ({ item }: Props) => {
  return (
    <Link to={`/character/${item.id}`} className="button-link">
      <div className="card">
        <div className="card-image-holder">
          <img className="card-image" src={item.image} />
        </div>
        <div className="card-name-holder">{item.name}</div>
      </div>
    </Link>
  );
};
export default Card;
