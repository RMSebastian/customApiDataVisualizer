import { CharacterApiResponse } from "../../interfaces/Character";
import ListGroup from "../../components/ListGroup/ListGroup";
import { useCallback, useEffect, useState } from "react";
import "./CharactersList.css";
import Loader from "../../components/Loader/Loader";
import Checkbox from "../../components/Checkbox/Checkbox";
import SearchBar from "../../components/SearchBar/SearchBar";
import GridGroup from "../../components/GridGroup/GridGroup";
import {
  renderGridCharacter,
  renderListCharacter,
} from "../../services/RickAndMorty/renderService";

const URL = import.meta.env.VITE_API_URL;

const CharacterList = () => {
  const [pages, setPages] = useState<number>(0);
  const [isChecked, setIsChecked] = useState(false);
  const [characters, setCharacters] = useState<CharacterApiResponse | null>(
    null
  );
  const [searchPrompt, SetSearchPrompt] = useState<string>("");

  const getUrl = () => {
    if (searchPrompt == "") {
      return `${URL}/character?page=${pages}`;
    } else {
      return `${URL}/character?page=${pages}&name=${searchPrompt}`;
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
          {!characters.error ? (
            <>
              {isChecked ? (
                <ListGroup
                  heading="Rick & Morty: Characters"
                  items={characters.results}
                  renderItem={renderListCharacter}
                ></ListGroup>
              ) : (
                <GridGroup
                  items={characters.results}
                  renderItem={renderGridCharacter}
                ></GridGroup>
              )}
              <div>
                {characters?.info.prev != null && (
                  <button onClick={() => setPages(pages - 1)}>
                    {"previous"}
                  </button>
                )}
                {characters?.info.next != null && (
                  <button onClick={() => setPages(pages + 1)}>{"next"}</button>
                )}
              </div>
            </>
          ) : (
            <>
              <div>Error</div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default CharacterList;
