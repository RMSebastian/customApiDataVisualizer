import { ReactNode } from "react";

type Props<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

const GridGroup = <T,>({ items, renderItem }: Props<T>) => {
  return (
    <>
      <div className="grid-container">
        {items.map((element, index) => (
          <div key={index} className="grid-container-content">
            {renderItem(element)}
          </div>
        ))}
      </div>
    </>
  );
};

export default GridGroup;
