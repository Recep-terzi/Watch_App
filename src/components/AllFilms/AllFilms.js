import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./AllFilms.Module.css";
import "./AllFilms";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { pageDown, pageUp } from "../../redux/watchSlice";
import Loading from "../Loading/Loading";
const AllFilms = () => {
  const [films, setFilms] = useState();
  const [loading, setLoading] = useState(true);
  const pageUpButton = () => {
    dispatch(pageUp());
  };
  const pageDownButton = () => {
    dispatch(pageDown());
  };
  let pageNumber = useSelector((state) => state.watch.page);
  const dispatch = useDispatch();
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=466279f06d7f82ea9024d440431f8663&language=en-US&page=${pageNumber}`
      )
      .then((data) => setFilms(data.data));
  }, [pageNumber]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <div className="container">
            <Navbar id="top" />

            <div className="films-body">
              <div className="films-left">
                <p>Kategoriler</p>
                <ul>
                  <li>Macera</li>
                  <li>Romantik</li>
                  <li>Bilim - Kurgu</li>
                </ul>
              </div>
              {films && (
                <div className="films-right">
                  <Fade>
                    {films.results.map((film) => (
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="films-card"
                      >
                        <Link
                          to={`/detail/${film.id}`}
                          className="films-card-image"
                        >
                          <img src={IMG_API + film.poster_path} alt="" />
                        </Link>
                      </motion.div>
                    ))}
                  </Fade>
                </div>
              )}
            </div>
            <div className="films-button">
              <a href="#top">
                <button onClick={pageUpButton}>
                  {pageNumber + 1}. sayfaya git
                </button>
              </a>
              {pageNumber !== 1 && (
                <a href="#top">
                  <button onClick={pageDownButton}>
                    {" "}
                    {pageNumber - 1}. sayfaya git
                  </button>
                </a>
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default AllFilms;
