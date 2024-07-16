import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Character } from "../../interfaces/Character";

const PokemonDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data: Character) => {
        setCharacter(data);
      });
  }, [id]);

  if (!character) return <div>Loading...</div>;
  return (
    <>
      <div>
        <Link to={`/`} className="button-link">
          <button></button>
        </Link>
        <h1>{character.name}</h1>
      </div>
      <div>
        <img src={character.image} />
      </div>
    </>
  );
};

export default PokemonDetail;
