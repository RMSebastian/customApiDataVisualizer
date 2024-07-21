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
    <div key={0} className="searchbar">
      <input
        key={0}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
