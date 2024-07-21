import { Fragment, useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Character } from "../../interfaces/Character";
import "./CharacterDetail.css";
import Loader from "../../components/Loader/Loader";
import DetailTable, {
  TableData,
} from "../../components/DetailTable/DetailTable";
import { getCharacterData } from "../../services/RickAndMorty/tableService";
import { fetchData } from "../../services/RickAndMorty/fetchService";
import { URL } from "../../utils/exports";
import NavBar from "../../components/NavBar/NavBar";
import GridTab from "../../components/GridTab/GridTab";
const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [tableData, setTableData] = useState<TableData[] | null>(null);

  const fetchCharacter = useCallback(async () => {
    const data = await fetchData<Character>(`${URL}/character/${id}`);
    setCharacter(data);
  }, [id]);
  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter()]);

  useEffect(() => {
    if (character) {
      const fetchTableData = async () => {
        const data = await getCharacterData(character);
        setTableData(data);
      };

      fetchTableData();
    }
  }, [character]);
  return (
    <>
      <Loader key={0} loading={character == null} />
      {character != null && (
        <>
          <NavBar
            key={0}
            items={
              <GridTab
                key={0}
                children={[
                  <div key={0} className="back-button">
                    <Link key={0} to={`/`} className="button-link">
                      <button key={0}>{"Back"}</button>
                    </Link>
                  </div>,
                  <h2 key={1} className="content-name">
                    {character.name}
                  </h2>,
                  <Fragment key={2}></Fragment>,
                ]}
              />
            }
          />
          <div key={1} className="content">
            <img key={0} className="content-image" src={character.image} />
            <DetailTable key={1} content={tableData}></DetailTable>
          </div>
        </>
      )}
    </>
  );
};

export default CharacterDetail;
