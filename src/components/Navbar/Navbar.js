import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.Module.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-item">
          <Link to="/login">Giriş</Link>
          <Link to="/register">Kayıt ol</Link>
          <a href="#profil">Profil</a>
        </div>
        <div className="nav-logo">
          <Link to="/">PysonFlix</Link>
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
