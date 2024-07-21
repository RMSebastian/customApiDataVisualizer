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
import GridTab from "../../components/GridTab/GridTab";
import FilterSelector from "../../components/FilterSelector/FilterSelector";
import {
  getGenderData,
  getStatusData,
} from "../../services/RickAndMorty/tableService";
import { TableData } from "../../components/DetailTable/DetailTable";

const CharacterList = () => {
  //Use State variables
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState<number>(1);
  const [characters, setCharacters] = useState<CharacterApiResponse | null>(
    null
  );

  //SearchParams
  const gridParam =
    searchParams.has("gridView") && searchParams.get("gridView") === "true";
  const nameParam = searchParams.get("name") ?? "";
  const genderParam = searchParams.get("gender") ?? "";
  const statusParam = searchParams.get("status") ?? "";

  //UseCalback Methods
  const fetchCharacterData = useCallback(async () => {
    const data = await fetchCharacters<CharacterApiResponse>(
      searchParams,
      pages
    );
    setCharacters(data);
  }, [pages, searchParams]);

  //UseEffect Methods
  useEffect(() => {
    fetchCharacterData();
  }, [fetchCharacterData]);

  //Methods
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
  const handleFilterChange = (data: TableData) => {
    if (data.value == "") {
      if (searchParams.has(data.field)) {
        searchParams.delete(data.field);
      }
    } else {
      searchParams.set(data.field, data.value);
    }
    setSearchParams(searchParams);
  };

  //Return Component
  return (
    <>
      <Loader loading={characters == null} />
      {characters != null && (
        <>
          <NavBar
            items={
              <GridTab
                key={0}
                children={[
                  <GridTab
                    key={0}
                    children={[
                      <FilterSelector
                        key={0}
                        label="Status"
                        value={statusParam}
                        content={getStatusData()}
                        onChange={handleFilterChange}
                      />,
                      <FilterSelector
                        key={1}
                        label="Gender"
                        value={genderParam}
                        content={getGenderData()}
                        onChange={handleFilterChange}
                      />,
                    ]}
                  />,
                  <SearchBar
                    key={1}
                    query={nameParam}
                    onSearch={HandleSearchBarName}
                  />,
                  <Checkbox
                    key={2}
                    label={gridParam ? "List" : "Grid"}
                    checked={gridParam}
                    onChange={HandleCheckBoxViewer}
                  />,
                ]}
              />
            }
          />
          <div className="header"></div>
          {!characters.error ? (
            <>
              {gridParam ? (
                <ListGroup
                  key={0}
                  heading="Characters: List"
                  items={characters.results}
                  renderItem={renderListCharacter}
                />
              ) : (
                <GridGroup
                  key={0}
                  heading="Characters: Grid"
                  items={characters.results}
                  renderItem={renderGridCharacter}
                />
              )}
              <div key={1} className="buttons">
                <button
                  key={0}
                  onClick={() => setPages(pages - 1)}
                  disabled={
                    characters?.info.prev === null ||
                    characters === null ||
                    pages <= 1
                  }
                >
                  {"previous"}
                </button>
                <div key={1} className="page-counter">
                  <h1>{pages}</h1>
                </div>
                <button
                  key={2}
                  onClick={() => setPages(pages + 1)}
                  disabled={
                    characters?.info.next === null ||
                    characters === null ||
                    pages >= characters.info.pages
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
