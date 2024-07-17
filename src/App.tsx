import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail";
import CharacterList from "./pages/CharactersList/CharactersList";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
