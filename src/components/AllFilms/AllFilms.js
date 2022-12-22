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
import { AiOutlineArrowRight } from "react-icons/ai";
const AllFilms = () => {
  const [films, setFilms] = useState();
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState();
  const [filteredDetail, setFilteredDetail] = useState("");
  const [search, setSearch] = useState("");
  const pageUpButton = () => {
    dispatch(pageUp());
  };
  const pageDownButton = () => {
    dispatch(pageDown());
  };
  let pageNumber = useSelector((state) => state.watch.page);
  const dispatch = useDispatch();
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const filteredFilms = (filteredDetail, films) => {
    setFilteredDetail(filteredDetail);
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=466279f06d7f82ea9024d440431f8663&language=en-US&page=${pageNumber}&with_genres=${filteredDetail}`;
    axios.get(url).then((data) => setFilter(data.data));
  };
  useEffect(() => {
    axios
      .get(
        filter
          ? `https://api.themoviedb.org/3/movie/popular?api_key=466279f06d7f82ea9024d440431f8663&language=en-US&page=${pageNumber}&with_genres=${filteredDetail}`
          : `https://api.themoviedb.org/3/movie/popular?api_key=466279f06d7f82ea9024d440431f8663&language=en-US&page=${pageNumber}`
      )
      .then((data) => setFilms(data.data));
  }, [pageNumber, filter, filteredDetail]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=466279f06d7f82ea9024d440431f8663&language=en-US&query=${search}&page=1&include_adult=false`
      )
      .then((data) => setFilms(data.data));
  }, [search]);
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
                <ul className="search-ul">
                  <li>
                    <input
                      type="text"
                      placeholder="Aramak için"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </li>
                </ul>
                <ul>
                  <li onClick={() => filteredFilms("12")}>
                    <AiOutlineArrowRight />
                    Macera
                  </li>
                  <li onClick={() => filteredFilms("10749")}>
                    <AiOutlineArrowRight />
                    Romantik
                  </li>
                  <li onClick={() => filteredFilms("878")}>
                    <AiOutlineArrowRight />
                    Bilim - Kurgu
                  </li>
                  <li onClick={() => filteredFilms("28")}>
                    <AiOutlineArrowRight />
                    Aksiyon
                  </li>
                  <li onClick={() => filteredFilms("16")}>
                    <AiOutlineArrowRight />
                    Animasyon
                  </li>
                  <li onClick={() => filteredFilms("35")}>
                    <AiOutlineArrowRight />
                    Komedi
                  </li>
                  <li onClick={() => filteredFilms("80")}>
                    <AiOutlineArrowRight />
                    Suç
                  </li>
                  <li onClick={() => filteredFilms("18")}>
                    <AiOutlineArrowRight />
                    Dram
                  </li>
                  <li onClick={() => filteredFilms("10751")}>
                    <AiOutlineArrowRight />
                    Aile - Çocuk
                  </li>
                  <li onClick={() => filteredFilms("27")}>
                    <AiOutlineArrowRight />
                    Korku
                  </li>
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
