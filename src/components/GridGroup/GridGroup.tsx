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
            name={element.name}
            image={element.image}
            ></Card>
        );
        })}
    </div>
    </>
  )
}

export default GridGroup