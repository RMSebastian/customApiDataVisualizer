import { ReactNode } from "react";
import "./GridGroup.css";
type Props<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  heading?: string;
};

const GridGroup = <T,>({ heading = "Grid",items, renderItem }: Props<T>) => {
  return (
    <div className="grid-body">
      <h1 className="list-title">{heading}</h1>
        <div className="grid-container">
          {items.map((element) => (
            <>{renderItem(element)}</>
          ))}
        </div>
    </div>
  );
};

export default GridGroup;
