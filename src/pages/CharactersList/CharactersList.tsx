import { CharacterApiResponse } from "../../interfaces/Character";
import ListGroup from "../../components/ListGroup/ListGroup";
import { useCallback, useEffect, useState } from "react";
import "./CharactersList.css";
import Loader from "../../components/Loader/Loader";
import Checkbox from "../../components/Checkbox/Checkbox";
import SearchBar from "../../components/SearchBar/SearchBar";
import GridGroup from "../../components/GridGroup/GridGroup";

const CharacterList = () => {
  const [pages, setPages] = useState<number>(0);
  const [isChecked, setIsChecked] = useState(false);
  const [characters, setCharacters] = useState<CharacterApiResponse | null>(
    null
  );
  const [searchPrompt, SetSearchPrompt] = useState<string>("");

  const getUrl = () => {
    if (searchPrompt == "") {
      return `https://rickandmortyapi.com/api/character?page=${pages}`;
    } else {
      return `https://rickandmortyapi.com/api/character?page=${pages}&name=${searchPrompt}`;
    }
  };

  const fetchCharacter = useCallback(() => {
    fetch(getUrl())
      .then((response) => response.json())
      .then((data: CharacterApiResponse) => {
        setCharacters(data);
      })
      .catch((err) => console.log(err));
  }, [pages, searchPrompt]);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);

  //TODO: prevenir result null
  const query = (value: string) => {
    SetSearchPrompt(value);
  };
  return (
    <>
      <Loader loading={characters == null} />
      {characters != null && (
        <div className="app">
          <div className="header">
            <Checkbox
              label={isChecked ? "Grid" : "List"}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <SearchBar onSearch={query}></SearchBar>
          </div>
          {isChecked && (
              <ListGroup
                key={1}
                items={characters.results}
                heading="Rick & Morty: Characters"
              ></ListGroup>

          )}
          {!isChecked && (
            <GridGroup characters={characters.results}></GridGroup>
          )}
          <div>
            {characters?.info.prev != null && (
              <button onClick={() => setPages(pages - 1)}>{"previous"}</button>
            )}
            {characters?.info.next != null && (
              <button onClick={() => setPages(pages + 1)}>{"next"}</button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterList;
