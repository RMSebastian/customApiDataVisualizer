import { ReactNode } from "react";
import "./GridTab.css";
type Props = {
  children: ReactNode[];
};

const GridTab = ({ children }: Props) => {
  return (
    <div
      className="gridtab"
    >
      {children.map((item, index) => (
        <div key={index} className="gridtab-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default GridTab;
