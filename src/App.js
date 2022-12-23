import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AllFilms from "./components/AllFilms/AllFilms";
import AllTV from "./components/AllTV/AllTV";
import DiziDetail from "./components/DiziDetail/DiziDetail";
import FilmDetail from "./components/FilmDetail/FilmDetail";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import MyList from "./components/MyList/MyList";
import Register from "./components/Register/Register";
import { auth } from "./firebase/config";
import { login, logout } from "./redux/watchSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/diziDetail/:id" element={<DiziDetail />}></Route>
        <Route path="/detail/:id" element={<FilmDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/allfilms" element={<AllFilms />}></Route>
        <Route path="/alltv" element={<AllTV />}></Route>
        <Route path="/mylist" element={<MyList />}></Route>
      </Routes>
    </>
  );
}

export default App;
