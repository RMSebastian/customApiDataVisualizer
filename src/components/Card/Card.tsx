import { Link } from "react-router-dom";
import "./Card.css";
type Props = {
  id: string;
  name: string;
  image: string;
};

const Card = ({ id, name, image }: Props) => {
  return (
    <Link to={`/character/${id}`} key={id} className="card">
      <div key={id} className="card-image-holder">
        <img key={id} className="card-image" src={image} />
      </div>
      <h2 key={id + 1} className="card-name">
        {name}
      </h2>
    </Link>
  );
};
export default Card;
