import { Link } from "react-router-dom";
import "./Card.css";
type Props = {
  id: string;
  name: string;
  image: string;
};

const Card = ({ id, name, image }: Props) => {
  return (
    <Link to={`/character/${id}`} className="card">
      <div className="card-image-holder">
        <img className="card-image" src={image} />
      </div>
      <h2 className="card-name">{name}</h2>
    </Link>
  );
};
export default Card;
