import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.Module.css";
import NotFoundImage from "../../assets/NotFound.svg";
const NotFound = () => {
  return (
    <>
      <div className="notfound-container">
        <img src={NotFoundImage} alt="" />
        <p className="notfound">
          Sayfa bulunamadı. Anasayfaya dönmek için{" "}
          <Link to="/">Tıklayınız</Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
