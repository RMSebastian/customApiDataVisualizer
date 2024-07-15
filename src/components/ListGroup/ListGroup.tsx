import { Pokemon } from "../../interfaces/Pokemon";
import HCard from "../HCard/HCard";
import { useState } from "react";
import "./ListGoup.css";
interface Props {
  items: Pokemon[];
  heading: string;
}

const ListGroup = ({ items, heading }: Props) => {
  const [onEnterIndex, setOnEnterIndex] = useState<number | null>(null);
  const [onClickIndex, setOnClickIndex] = useState<number | null>(null);

  const getListContent = () =>
    items.length == 0 ? <p>No list found</p> : null;

  const getListDisplay = (index: number): string => {
    return `${
      index == onClickIndex
        ? "list-element-active"
        : index == onEnterIndex
        ? "list-element-hover"
        : "list-element"
    }`;
  };

  const handleOnMouseClick = (index: number) => setOnClickIndex(index);

  const handleOnMouseEnter = (index: number) => setOnEnterIndex(index);

  return (
    <div className="list-body">
      <h2 className="list-title">{heading}</h2>
      {getListContent()}
      <ul className="list-group-holder">
        <div className="list-group">
          {items.map((pokemon, index) => {
            return (
              <li
                className={getListDisplay(index)}
                onMouseEnter={() => {
                  handleOnMouseEnter(index);
                }}
                onClick={() => {
                  handleOnMouseClick(index);
                }}
                key={pokemon.id}
              >
                <HCard pokemon={pokemon}></HCard>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};
export default ListGroup;
