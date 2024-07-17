import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character } from "../../interfaces/Character";
import "./CharacterDetail.css";
import Loader from "../../components/Loader/Loader";
import DetailTable from "../../components/DetailTable/DetailTable";
const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data: Character) => {
        setCharacter(data);
      });
  }, [id]);
  return (
    <>
      <Loader loading={character == null} />
      {character != null && (
        <div>
          <div className="content-header">
            <h1>{character.name}</h1>
            <div className="spacer"></div>
          </div>
          <DetailTable character={character}></DetailTable>
        </div>
      )}
    </>
  );
};

export default CharacterDetail;
