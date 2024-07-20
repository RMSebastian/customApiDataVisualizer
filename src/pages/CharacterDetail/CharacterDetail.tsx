import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Character } from "../../interfaces/Character";
import "./CharacterDetail.css";
import Loader from "../../components/Loader/Loader";
import DetailTable, {
  TableData,
} from "../../components/DetailTable/DetailTable";
import { getTableData } from "../../services/RickAndMorty/tableService";
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
        const data = await getTableData(character);
        setTableData(data);
      };

      fetchTableData();
    }
  }, [character]);
  return (
    <>
      <Loader loading={character == null} />
      {character != null && (
        <>
          <NavBar
            items={
              <GridTab
                children={[
                  <div className="back-button">
                    <Link to={`/`} className="button-link">
                      <button>{"Back"}</button>
                    </Link>
                  </div>,
                  <h2 className="content-name">{character.name}</h2>,
                  <></>,
                ]}
              />
            }
          />
          <div className="content">
            <img className="content-image" src={character.image} />
            <DetailTable content={tableData}></DetailTable>
          </div>
        </>
      )}
    </>
  );
};

export default CharacterDetail;
