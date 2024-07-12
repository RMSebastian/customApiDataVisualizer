import { BrowserRouter, Route, Routes } from "react-router-dom";
import AmiiboList from "./pages/AmiiboList/AmiiboList";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<AmiiboList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
