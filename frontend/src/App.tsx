import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";
import { Pagesroutes } from "./utils/routers";

function App() {
  return (
    <div className="pageContainer">
      <BrowserRouter>
        <Routes>
          <Route path={Pagesroutes.MAIN} element={<MainPage />} />
          <Route path={Pagesroutes.GAME} element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
