import React, { useEffect, useRef } from "react";
import DiziSection from "../DiziSection/DiziSection";

import "./Main.Module.css";
const Main = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
      <div className="container">
        <nav>
          <div className="nav-item">
            <a href="">Giriş</a>
            <a href="">Çıkış</a>
            <a href="">Profil</a>
          </div>
          <div className="nav-logo">PysonFlix</div>
          <div className="nav-item">
            <a href="#dizi-section">Diziler</a>
            <a href="">Filmler</a>
            <a href="">Çocuk</a>
          </div>
        </nav>
      </div>
      <DiziSection id="dizi-section" />

      <div className="video">
        <video
          playsInline
          loop
          muted
          alt="All the devices"
          src={require("../../assets/main.mp4")}
          ref={videoEl}
        />
      </div>
    </>
  );
};

export default Main;
