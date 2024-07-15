import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetail from "./pages/PokemonDetail/PokemonDetail";
import PokemonList from "./pages/PokemonList/PokemonList";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
