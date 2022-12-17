import React, { useEffect, useRef, useState } from "react";
import DiziSection from "../DiziSection/DiziSection";
import FilmSection from "../FilmSection/FilmSection";
import Footer from "../Footer/Footer";
import HorrorSection from "../HorrorSection/HorrorSection";
import KidSection from "../KidSection/KidSection";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";
import TurkishDiziSection from "../TurkishDiziSection/TurkishDiziSection";

import "./Main.Module.css";
const Main = () => {
  const [loading, setLoading] = useState(true);

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      attemptPlay();
    }, 2000);
  }, []);

  return (
    <>
      {loading && (
        <>
          <Loading />
        </>
      )}
      {!loading && (
        <>
          <div className="container">
            <Navbar />
          </div>
          <div className="main-section">
            <DiziSection />
            <FilmSection />
            <KidSection />
            <HorrorSection />
            <TurkishDiziSection />
          </div>
          <Footer />
        </>
      )}
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
