import { useState } from "react";
import "./SearchBar.css";

type Props = {
  placeholder?: string;
  onSearch: (value: string) => void;
};

const SearchBar = ({ onSearch, placeholder = "Search" }: Props) => {
  const [query, setQuery] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };
  console.log(query);
  return (
    <div className="searchbar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
