import "./App.css";
import CardPage from "./modules/CardPage";
import MainPage from "./modules/MainPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import SearchModule from "./modules/SearchModule";
import Navbar from "./partials/Navbar";
import SuperWorldLevel from "./modules/SuperWorldLevel";
import Footer from "./partials/Footer";
import SuperWorldLandingPage from "./modules/SuperWorldLandingPage";
import SuperTeamMusicWorld from "./modules/SuperTeamMusicWorld";
import ScrollToTop from "./modules/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen">
      <HashRouter>
        <ScrollToTop/>
        <Navbar />
        <div className="">
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route exact path="/jp-price" element={<SearchModule />}></Route>
          <Route
            exact
            path="/jp-price/:password"
            element={<CardPage />}></Route>
          <Route exact path="/smm2/super_world" element={<SuperWorldLandingPage/>}></Route>
          <Route exact path="/smm2/super_world/:id" element={<SuperWorldLevel/> }></Route>
          <Route exact path="/smm2/stmw" element={<SuperTeamMusicWorld/> }></Route>
        </Routes>
        </div>
        <Footer className="sticky top-full"/>
      </HashRouter>
    </div>
  );
}

export default App;
