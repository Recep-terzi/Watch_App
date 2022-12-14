import React from "react";
import { Route, Routes } from "react-router-dom";
import DiziDetail from "./components/DiziDetail/DiziDetail";
import FilmDetail from "./components/FilmDetail/FilmDetail";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/diziDetail/:id" element={<DiziDetail />}></Route>
        <Route path="/filmDetail/:id" element={<FilmDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
