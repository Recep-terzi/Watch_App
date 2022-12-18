import React from "react";
import "./Footer.Module.css";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { GiFilmProjector } from "react-icons/gi";
import popcorn from "../../assets/popcorn.svg";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-item">
            <div className="absolute-icon">
              <GiFilmProjector />
            </div>
            <div className="absolute-icon2">
              <img src={popcorn} alt="popcorn" />
            </div>
            <div className="footer-detail">
              <div className="footer-logo">PysonFlix</div>
              <div className="footer-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                consectetur eum quos ipsum maiores similique quod cupiditate
                provident praesentium qui amet laudantium dolorum quaerat
                nesciunt esse impedit atque magni architecto cumque, porro cum
                culpa nemo aut. Fugit, aperiam earum, repellendus blanditiis
                iure dignissimos modi voluptatibus iusto culpa neque laudantium
                distinctio.
              </div>
            </div>
            <div className="footer-link-menu">
              <ul>
                <li>Diziler</li>
                <li>Filmler</li>
                <li>Çocuk</li>
                <li>İletişim</li>
                <li>Üye ol</li>
              </ul>
            </div>
            <div className="footer-social-media">
              <div className="instgram">
                <AiFillInstagram />
                <p>İnstgram</p>
              </div>
              <div className="linkedin">
                <AiFillLinkedin />
                <p>Linkedin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
