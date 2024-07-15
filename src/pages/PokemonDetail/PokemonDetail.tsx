import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Pokemon } from "../../interfaces/Pokemon";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data: Pokemon) => {
        setPokemon(data);
      });
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;
  return (
    <>
      <div>
        <Link to={`/`} className="button-link">
          <button></button>
        </Link>
        <h1>{pokemon.name}</h1>
      </div>
      <div>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.sprites.front_default}
        />
        <div>
          {pokemon.types.map((releaseItem) => {
            return (
              <p
                key={`${pokemon.id}${releaseItem.slot}`}
              >{`${releaseItem.type.name}`}</p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
