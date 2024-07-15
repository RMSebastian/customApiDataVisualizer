import { Pokemon, PokemonListApiResponse } from "../../interfaces/Pokemon";
import ListGroup from "../../components/ListGroup/ListGroup";
import { useCallback, useEffect, useState } from "react";
import "./PokemonList.css";

const PokemonList = () => {
  const [pages, setPages] = useState<number>(0);
  const [paginatePokemon, SetPaginatePokemon] =
    useState<PokemonListApiResponse | null>(null);
  const [detailPokemon, SetDetailPokemon] = useState<Pokemon[]>([]);
  const itemsPerPage: number = 20;
  const fetchPokemon = useCallback(()=>{
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
  const fetchDetailPokemon = useCallback(() =>{
    if (paginatePokemon != null) {
      const fetchingDetails = async () => {
        const newPromise = paginatePokemon.results.map((resource) =>
          fetch(resource.url).then((response) => response.json())
        );
        const pokemons: Pokemon[] = await Promise.all(newPromise);
        SetDetailPokemon((prev) => [...prev, ...pokemons]);
      };
      fetchingDetails();
    }
  }, [paginatePokemon])
  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setPages((prevPages) => prevPages + 1);
  }, []);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);
  useEffect(() => {
    fetchDetailPokemon();
  }, [fetchDetailPokemon]);
  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
}, [handleScroll]);

  if (!detailPokemon) return <div>Loading...</div>;
  return (
    <div className="app">
      <div className="header">
        <h1>Header</h1>
      </div>
      <div>
        <ListGroup key={1} items={detailPokemon} heading="Pokemon"></ListGroup>
      </div>
    </div>
  );
};

export default PokemonList;
