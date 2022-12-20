import React from "react";
import { Route, Routes } from "react-router-dom";
import AllFilms from "./components/AllFilms/AllFilms";
import DiziDetail from "./components/DiziDetail/DiziDetail";
import FilmDetail from "./components/FilmDetail/FilmDetail";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/diziDetail/:id" element={<DiziDetail />}></Route>
        <Route path="/detail/:id" element={<FilmDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/allfilms" element={<AllFilms />}></Route>
      </Routes>
    </>
  );
}

export default App;
