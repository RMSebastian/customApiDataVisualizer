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
import NavBar from "../../components/NavBar/NavBar";
import GridTab from "../../components/MainTab/GridTab";

const CharacterList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const gridView = searchParams.get("gridView") === "true";
  const searchPrompt = searchParams.get("name") ?? " ";

  const [pages, setPages] = useState<number>(1);
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
          <NavBar
            items={
              <GridTab
                children={[
                  <></>,
                  <SearchBar onSearch={HandleSearchBarName} />,
                  <Checkbox
                    label={gridView ? "List" : "Grid"}
                    checked={gridView}
                    onChange={HandleCheckBoxViewer}
                  />,
                ]}
              />
            }
          />
          <div className="header"></div>
          {!characters.error ? (
            <>
              {gridView ? (
                <ListGroup
                  heading="Characters: List"
                  items={characters.results}
                  renderItem={renderListCharacter}
                />
              ) : (
                <GridGroup
                  heading="Characters: Grid"
                  items={characters.results}
                  renderItem={renderGridCharacter}
                />
              )}
              <div className="buttons">
                <button
                  onClick={() => setPages(pages - 1)}
                  disabled={
                    characters?.info.prev === null || characters === null
                  }
                >
                  {"previous"}
                </button>
                <div className="page-counter">
                  <h1>{pages}</h1>
                </div>
                <button
                  onClick={() => setPages(pages + 1)}
                  disabled={
                    characters?.info.next === null || characters === null
                  }
                >
                  {"next"}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="error">
                <h1>{"Character not found"}</h1>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CharacterList;
