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
import { fetchCharacters } from "../../services/RickAndMorty/fetchService";
import { useSearchParams } from "react-router-dom";

const CharacterList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const gridView = searchParams.get("gridView") === "true";
  const searchPrompt = searchParams.get("name") ?? " ";

  const [pages, setPages] = useState<number>(0);
  const [characters, setCharacters] = useState<CharacterApiResponse | null>(
    null
  );
  const fetchCharacterData = useCallback(async () => {
    const data = await fetchCharacters<CharacterApiResponse>(
      searchPrompt,
      pages
    );
    setCharacters(data);
  }, [pages, searchPrompt]);

  useEffect(() => {
    fetchCharacterData();
  }, [fetchCharacterData]);

  const HandleCheckBoxViewer = (checked: boolean) => {
    searchParams.set("gridView", checked.toString());
    setSearchParams(searchParams);
  };
  const HandleSearchBarName = (value: string) => {
    if (value == "") {
      searchParams.delete("name");
    } else {
      searchParams.set("name", value.toString());
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <Loader loading={characters == null} />
      {characters != null && (
        <>
          <div className="header">
            <SearchBar onSearch={HandleSearchBarName} />
            <Checkbox
              label={gridView ? "List" : "Grid"}
              checked={gridView}
              onChange={HandleCheckBoxViewer}
            />
          </div>
          {!characters.error ? (
            <>
              {gridView ? (
                <ListGroup
                  heading="Rick & Morty: Characters"
                  items={characters.results}
                  renderItem={renderListCharacter}
                />
              ) : (
                <GridGroup
                  items={characters.results}
                  renderItem={renderGridCharacter}
                />
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
        </>
      )}
    </>
  );
};

export default CharacterList;
