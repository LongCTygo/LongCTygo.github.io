import "./App.css";
import CardPage from "./modules/CardPage";
import MainPage from "./modules/MainPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import SearchModule from "./modules/SearchModule";
import Navbar from "./partials/Navbar";
import SuperWorldLevel from "./modules/SuperWorldLevel";
import Footer from "./partials/Footer";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route exact path="/jp-price" element={<SearchModule />}></Route>
          <Route
            exact
            path="/jp-price/:password"
            element={<CardPage />}
          ></Route>
          <Route exact path="/smm2/super_world/:id" element={<SuperWorldLevel/> }></Route>
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
