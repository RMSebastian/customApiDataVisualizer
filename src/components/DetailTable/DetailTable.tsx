import { Character } from "../../interfaces/Character"


type Props ={
    character: Character
}

const Detailtable = ({character}:Props) => {
  return (
    <>
          <div className="content-detail">
            <div className="content-image">
              <img src={character.image} />
            </div>
            <div className="content-table">
              <table>
                <thead className="table-header">
                  <tr>
                    <th className="table-header-content" scope="col">
                      Field
                    </th>
                    <th className="table-header-content" scope="col">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody className="table-content">
                  <tr>
                    <th className="table-header-content" scope="row">
                      Name
                    </th>
                    <td className="table-content-content">{character.name}</td>
                  </tr>
                  <tr>
                    <th className="table-header-content" scope="row">
                      Status
                    </th>
                    <td className="table-content-content">
                      {character.status}
                    </td>
                  </tr>
                  <tr>
                    <th className="table-header-content" scope="row">
                      Species
                    </th>
                    <td className="table-content-content">
                      {character.species}
                    </td>
                  </tr>
                  <tr>
                    <th className="table-header-content" scope="row">
                      Gender
                    </th>
                    <td className="table-content-content">
                      {character.gender}
                    </td>
                  </tr>
                  <tr>
                    <th className="table-header-content" scope="row">
                      Origin
                    </th>
                    <td className="table-content-content">
                      {character.origin.name}
                    </td>
                  </tr>
                  <tr>
                    <th className="table-header-content" scope="row">
                      Location
                    </th>
                    <td className="table-content-content">
                      {character.location.name}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
    </>
  )
}

export default Detailtable