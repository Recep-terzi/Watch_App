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
import video1 from "../../assets/main2.mp4";
import video2 from "../../assets/main3.mp4";
import video3 from "../../assets/main4.mp4";
import video4 from "../../assets/main5.mp4";
import video5 from "../../assets/main6.mp4";
import "./Main.Module.css";
import { useSelector } from "react-redux";
const Main = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.watch.user);
  console.log(user);
  const videoEl = useRef(null);

  const video = [video1, video2, video3, video3, video4, video5];

  console.log(video[Math.floor(Math.random() * video.length)]);

  const attemptPlay = () => {
    setTimeout(() => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch((error) => {
          console.error("Error attempting to play", error);
        });
    }, 500);
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
          src={!loading && video[Math.floor(Math.random() * video.length)]}
          ref={videoEl}
        />
      </div>
    </>
  );
};

export default Main;
