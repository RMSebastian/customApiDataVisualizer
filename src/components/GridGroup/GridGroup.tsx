import { Character } from "../../interfaces/Character"
import Card from "../Card/Card";

type Props = {
    characters: Character[];
}

const GridGroup = ({characters}:Props) => {
  return (
    <>
        <div className="grid-container">
        {characters.map((element) => {
        return (
            <Card
            key={element.id}
            item={element}
            ></Card>
        );
        })}
    </div>
    </>
  )
}

export default GridGroup