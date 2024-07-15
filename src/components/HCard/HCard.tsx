import { Pokemon } from "../../interfaces/Pokemon";
import { Link } from "react-router-dom";
import "./HCard.css";

interface Props {
  pokemon: Pokemon;
}

const HCard = ({ pokemon }: Props) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="button-link">
      <div className="card-horizontal">
        <div className="amiibo-image-horizontal-holder">
          {
            <img
              className="amiibo-image-horizontal"
              src={pokemon.sprites.front_default}
            ></img>
          }
        </div>
        <div className="amiibo-name-horizontal-holder">
          {<h3 className="amiibo-name-horizontal">{pokemon.name}</h3>}
        </div>
      </div>
    </Link>
  );
};

export default HCard;
