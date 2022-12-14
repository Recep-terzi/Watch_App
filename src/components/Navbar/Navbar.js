import React from "react";
import "./Navbar.Module.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-item">
          <a href="#login">Giriş</a>
          <a href="#logout">Çıkış</a>
          <a href="#profil">Profil</a>
        </div>
        <div className="nav-logo">PysonFlix</div>
        <div className="nav-item">
          <a href="#dizi-section">Diziler</a>
          <a href="#film-section">Filmler</a>
          <a href="#cocuk">Çocuk</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
