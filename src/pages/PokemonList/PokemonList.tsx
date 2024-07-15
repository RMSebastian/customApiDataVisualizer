import { Pokemon, PokemonListApiResponse } from "../../interfaces/Pokemon";
import ListGroup from "../../components/ListGroup/ListGroup";
import { useEffect, useState } from "react";
import "./PokemonList.css";

const PokemonList = () => {
  const [pages, setPages] = useState<number>(0);
  const [paginatePokemon, SetPaginatePokemon] =
    useState<PokemonListApiResponse | null>(null);
  const [detailPokemon, SetDetailPokemon] = useState<Pokemon[] | null>(null);
  const itemsPerPage: number = 20;
  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerPage}&offset=${
        pages * itemsPerPage
      }`
    )
      .then((response) => response.json())
      .then((data: PokemonListApiResponse) => {
        SetPaginatePokemon(data);
      })
      .catch((err) => console.log(err));
  }, [pages]);
  useEffect(() => {
    if (paginatePokemon != null) {
      const fetchingDetails = async () => {
        const newPromise = paginatePokemon.results.map((resource) =>
          fetch(resource.url).then((response) => response.json())
        );
        const pokemons: Pokemon[] = await Promise.all(newPromise);
        SetDetailPokemon(pokemons);
      };
      fetchingDetails();
    }
  }, [paginatePokemon]);

  if (!detailPokemon) return <div>Loading...</div>;
  return (
    <div className="app">
      <div>
        <ListGroup key={1} items={detailPokemon} heading="Pokemon"></ListGroup>
      </div>
      <div>
        {paginatePokemon?.previous != null && (
          <button onClick={() => setPages(pages - 1)}>{"previous"}</button>
        )}
        {paginatePokemon?.next != null && (
          <button onClick={() => setPages(pages + 1)}>{"next"}</button>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
