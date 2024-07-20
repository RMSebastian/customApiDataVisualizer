import { ReactNode } from "react";
import "./ListGoup.css";
type Props<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  heading: string;
};

const ListGroup = <T,>({ items, heading, renderItem }: Props<T>) => {
  return (
    <div className="list-body">
      <h1 className="list-title">{heading}</h1>
      <ul className="list-group-holder">
        {items.map((item) => {
          return <li>{renderItem(item)}</li>;
        })}
      </ul>
    </div>
  );
};
export default ListGroup;
