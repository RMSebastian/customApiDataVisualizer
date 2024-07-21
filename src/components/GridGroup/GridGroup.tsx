import { Fragment, ReactNode } from "react";
import "./GridGroup.css";
type Props<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  heading?: string;
};

const GridGroup = <T,>({ heading = "Grid", items, renderItem }: Props<T>) => {
  return (
    <div key={0} className="grid-body">
      <h1 key={0} className="list-title">
        {heading}
      </h1>
      <div key={1} className="grid-container">
        {items.map((element,index) => (
          <Fragment key={index}>{renderItem(element)}</Fragment>
        ))}
      </div>
    </div>
  );
};

export default GridGroup;
