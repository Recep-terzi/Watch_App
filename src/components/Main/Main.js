import React, { useEffect, useRef, useState } from "react";
import ComedySection from "../ComedySection/ComedySection";
import CrimeSection from "../CrimeSection/CrimeSection";
import DiziSection from "../DiziSection/DiziSection";
import DramaSection from "../DramaSection/DramaSection";
import FamilySection from "../FamilySection/FamilySection";
import FilmSection from "../FilmSection/FilmSection";
import Footer from "../Footer/Footer";
import HorrorSection from "../HorrorSection/HorrorSection";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";
import RomanceSection from "../RomanceSection/RomanceSection";
import ScienceSection from "../ScienceSection/ScienceSection";
import TurkishDiziSection from "../TurkishDiziSection/TurkishDiziSection";
import { Zoom } from "react-awesome-reveal";

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
    document.body.style.backgroundImage = "none";

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
            <Zoom cascade>
              <DiziSection />
            </Zoom>
            <Zoom cascade>
              <FilmSection />
            </Zoom>
            <Zoom cascade>
              <HorrorSection />
            </Zoom>
            <Zoom cascade>
              <ComedySection />
            </Zoom>
            <Zoom cascade>
              <CrimeSection />
            </Zoom>
            <Zoom cascade>
              <DramaSection />
            </Zoom>
            <Zoom cascade>
              <FamilySection />
            </Zoom>
            <Zoom cascade>
              <RomanceSection />
            </Zoom>
            <Zoom cascade>
              <ScienceSection />
            </Zoom>
            <Zoom cascade>
              <TurkishDiziSection />
            </Zoom>
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
