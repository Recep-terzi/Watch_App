import React from "react";
import "./Footer.Module.css";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { GiFilmProjector } from "react-icons/gi";
import popcorn from "../../assets/popcorn.svg";
import { Link } from "react-router-dom";
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
                <li>
                  <Link to="/alltv">Diziler</Link>
                </li>
                <li>
                  <Link to="/allfilms">Filmler</Link>
                </li>
                <li>
                  <Link to="/">İletişim</Link>
                </li>
                <li>
                  <Link to="/login">Giriş Yap</Link>
                </li>
                <li>
                  <Link to="/register">Üye ol</Link>
                </li>
              </ul>
            </div>
            <div className="footer-social-media">
              <a
                className="instgram"
                href="https://www.instagram.com/recepterziiii/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
                <p>İnstgram</p>
              </a>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/recepterzi/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
                <p>Linkedin</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
