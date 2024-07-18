import { useState } from "react";

type Props = {
  placeholder?: string;
  onSearch: (value: string) => void;
};

const SearchBar = ({ onSearch, placeholder = "Search..." }: Props) => {
  const [query, setQuery] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
