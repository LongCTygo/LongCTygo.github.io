import "./App.css";
import CardPage from "./modules/CardPage";
import MainPage from "./modules/MainPage";
import {
  Route,
  Routes,
} from "react-router-dom";
import SearchModule from "./modules/SearchModule";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
      <Route exact path="/jp-price" element={<SearchModule />}></Route>
      <Route exact path="/jp-price/:password" element={<CardPage />}></Route>
    </Routes>
  );
}

export default App;
