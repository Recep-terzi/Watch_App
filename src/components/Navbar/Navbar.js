import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/watchSlice";
import "./Navbar.Module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
const Navbar = () => {
  const user = useSelector((state) => state.watch.user);
  const dispatch = useDispatch();

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("başarıyla çıkış yapıldı");
        dispatch(logout());
        // alertify.success("Başarıyla çıkış yapıldı!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <nav>
        <div className="nav-item">
          {user ? (
            <>
              <Link to="/" onClick={logoutUser}>
                Çıkış Yap
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">Giriş</Link>
              <Link to="/register">Kayıt ol</Link>
            </>
          )}
          <a href="#profil">Profil</a>
        </div>
        <div className="nav-logo">
          <Link to="/">PysonFlix</Link>
          {user && (
            <p className="welcomeUser"> Hoşgeldin, {user.displayName}</p>
          )}
        </div>
        <div className="nav-item">
          <Link to="/alltv">Diziler</Link>
          <Link to="/allfilms">Filmler</Link>
          <a href="#cocuk">Çocuk</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
