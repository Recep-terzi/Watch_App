import React, { useEffect, useRef } from "react";
import DiziSection from "../DiziSection/DiziSection";
import FilmSection from "../FilmSection/FilmSection";
import Navbar from "../Navbar/Navbar";

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
        <Navbar />
      </div>
      <div className="main-section">
        <DiziSection />
        <FilmSection />
      </div>
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
