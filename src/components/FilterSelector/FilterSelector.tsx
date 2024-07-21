import { useState } from "react";
import { TableData } from "../DetailTable/DetailTable";
import "./FilterSelector.css";

type Props = {
  label: string;
  content: TableData[];
  onChange: (data: TableData) => void;
};

const FilterSelector = ({ label, content, onChange }: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string = event.target.value;
    setSelectedValue(value);
    onChange({ field: label.toLowerCase(), value: value });
  };
  return (
    <div className="selector-container">
      <div className="selector-label">{label}</div>
      <select
        className="selector-body"
        name={label}
        value={selectedValue}
        onChange={handleChange}
      >
        <option className="selector-option" key={-1} value="">
          {"All"}
        </option>
        {content.map((item, index) => (
          <option className="selector-option" key={index} value={item.value}>
            {item.field}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelector;
