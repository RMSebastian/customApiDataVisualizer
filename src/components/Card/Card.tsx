import { Link } from "react-router-dom";
import "./Card.css";
type Props = {
  id: string;
  name: string;
  image: string;
};

const Card = ({ id, name, image }: Props) => {
  return (
    <Link to={`/character/${id}`} className="button-link">
      <div className="card">
        <div className="card-image-holder">
          <img className="card-image" src={image} />
        </div>
        <div className="card-name-holder">{name}</div>
      </div>
    </Link>
  );
};
export default Card;
