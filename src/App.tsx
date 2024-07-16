import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetail from "./pages/CharacterDetail/CharacterDetail";
import CharacterList from "./pages/CharactersList/CharactersList";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<PokemonDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
