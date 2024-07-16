import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Character } from "../../interfaces/Character";
import "./CharacterDetail.css"
const PokemonDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data: Character) => {
        setCharacter(data);
      });
  }, [id]);

  if (!character) return <div>Loading...</div>;
  return (
    <>
    <div className="content-header">
    <Link to={`/`} className="button-link">
        <button>{"Back"}</button>
    </Link>
    <h1>{character.name}</h1>
    <div className="spacer"></div>
    </div>
    <div className="content-detail">
      <div className="content-image">
          <img src={character.image} />
      </div>
      <div className="content-table"><table>
      <thead className="table-header">
        <tr>
          <th className="table-header-content" scope="col">Field</th>
          <th className="table-header-content" scope="col">Value</th>
        </tr>
      </thead>
      <tbody className="table-content">
        <tr>
          <th className="table-header-content" scope="row">Name</th>
          <td className="table-content-content" >{character.name}</td>
        </tr>
        <tr>
          <th className="table-header-content" scope="row">Status</th>
          <td className="table-content-content" >{character.status}</td>
        </tr>
        <tr>
          <th className="table-header-content" scope="row">Species</th>
          <td className="table-content-content" >{character.species}</td>
        </tr>
        <tr>
          <th className="table-header-content" scope="row">Gender</th>
          <td className="table-content-content" >{character.gender}</td>
        </tr>
        <tr>
          <th className="table-header-content" scope="row">Origin</th>
          <td className="table-content-content" >{character.origin.name}</td>
        </tr>
        <tr>
          <th className="table-header-content" scope="row">Location</th>
          <td className="table-content-content" >{character.location.name}</td>
        </tr>
      </tbody>
        </table></div>
    </div>
    </>
  );
};

export default PokemonDetail;
