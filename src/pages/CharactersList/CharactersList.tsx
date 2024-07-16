import { CharacterApiResponse } from "../../interfaces/Character";
import ListGroup from "../../components/ListGroup/ListGroup";
import { useCallback, useEffect, useState } from "react";
import "./CharactersList.css";

const CharacterList = () => {
  const [pages, setPages] = useState<number>(0);
  const [characters, setCharacters] = useState<CharacterApiResponse | null>(
    null
  );
  const fetchCharacter = useCallback(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${pages}`)
      .then((response) => response.json())
      .then((data: CharacterApiResponse) => {
        setCharacters(data);
      })
      .catch((err) => console.log(err));
  }, [pages]);

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);
  if (!characters) return <div>Loading...</div>;
  return (
    <div className="app">
      <div className="header">
        <h1>Header</h1>
      </div>
      <div>
        <ListGroup
          key={1}
          items={characters.results}
          heading="Rick & Morty: Characters"
        ></ListGroup>
      </div>
      <div>
        {characters?.info.prev != null && (
          <button onClick={() => setPages(pages - 1)}>{"previous"}</button>
        )}
        {characters?.info.next != null && (
          <button onClick={() => setPages(pages + 1)}>{"next"}</button>
        )}
      </div>
    </div>
  );
};

export default CharacterList;
