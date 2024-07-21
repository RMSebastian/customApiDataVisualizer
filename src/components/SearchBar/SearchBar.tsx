import "./SearchBar.css";

type Props = {
  placeholder?: string;
  query: string;
  onSearch: (value: string) => void;
};

const SearchBar = ({ query, onSearch, placeholder = "Search" }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
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
