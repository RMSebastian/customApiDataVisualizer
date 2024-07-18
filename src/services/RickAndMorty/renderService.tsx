import Card from "../../components/Card/Card";
import HCard from "../../components/HCard/HCard";
import { Character } from "../../interfaces/Character";

export const renderGridCharacter = (character: Character) => (
  <Card
    key={character.id}
    id={character.id}
    image={character.image}
    name={character.name}
  />
);
export const renderListCharacter = (character: Character) => (
  <HCard key={character.id} item={character} />
);
