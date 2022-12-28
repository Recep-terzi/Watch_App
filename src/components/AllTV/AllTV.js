import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./AllTV.Module.css";
import "./AllTV";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { pageDown, pageUp } from "../../redux/watchSlice";
import Loading from "../Loading/Loading";
import { AiOutlineArrowRight } from "react-icons/ai";
import { VscTriangleDown } from "react-icons/vsc";
const AllTV = () => {
  const [tv, setTv] = useState();
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState();
  const [filteredDetail, setFilteredDetail] = useState("");
  const [search, setSearch] = useState("");

  const [categoryClass, setCategoryClass] = useState(true);
  const activeCategories2 = useRef(null);

  const categories2 = useRef(null);
  const pageUpButton = () => {
    dispatch(pageUp());
  };
  const pageDownButton = () => {
    dispatch(pageDown());
  };
  let pageNumber = useSelector((state) => state.watch.page);
  const dispatch = useDispatch();
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const filteredFilms = (filteredDetail, tv) => {
    setFilteredDetail(filteredDetail);

    const url = `https://api.themoviedb.org/3/tv/popular?api_key=466279f06d7f82ea9024d440431f8663&language=en-US&page=1page=${pageNumber}&with_genres=${filteredDetail}`;
    axios.get(url).then((data) => setFilter(data.data));
  };
  useEffect(() => {
    axios
      .get(
        filter
          ? `https://api.themoviedb.org/3/tv/popular?api_key=466279f06d7f82ea9024d440431f8663&language=en-US&page=${pageNumber}&with_genres=${filteredDetail}`
          : `https://api.themoviedb.org/3/tv/popular?api_key=466279f06d7f82ea9024d440431f8663&language=en-US&page=${pageNumber}`
      )
      .then((data) => setTv(data.data));
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
      .then((data) => setTv(data.data));
  }, [search]);
  useEffect(() => {
    const el = activeCategories2.current;
    if (el) {
      el.addEventListener("click", () => {
        setCategoryClass(!categoryClass);
      });
    }
  });
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <div className="container">
            <Navbar id="top" />

            <div className="tv-body">
              <div className="tv-left">
                <p>
                  Kategoriler
                  <div ref={activeCategories2}>
                    <VscTriangleDown id="getCategories2" />
                  </div>
                </p>
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
                <ul
                  id="categories2"
                  ref={categories2}
                  className={categoryClass ? "" : "active"}
                >
                  <li onClick={() => filteredFilms("10759")}>
                    <AiOutlineArrowRight />
                    Aksiyon & Macera
                  </li>
                  <li onClick={() => filteredFilms("16")}>
                    <AiOutlineArrowRight />
                    Animasyon
                  </li>
                  <li onClick={() => filteredFilms("10765")}>
                    <AiOutlineArrowRight />
                    Bilim - Kurgu & Fantazi
                  </li>
                  <li onClick={() => filteredFilms("10766")}>
                    <AiOutlineArrowRight />
                    Pembe Dizi
                  </li>
                  <li onClick={() => filteredFilms("10767")}>
                    <AiOutlineArrowRight />
                    Talk
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
                  <li onClick={() => filteredFilms("10762")}>
                    <AiOutlineArrowRight />
                    Çocuklar
                  </li>
                  <li onClick={() => filteredFilms("10768")}>
                    <AiOutlineArrowRight />
                    Savaş & Politik
                  </li>
                </ul>
              </div>
              {tv && (
                <div className="tv-right">
                  <Fade>
                    {tv.results.map((film) => (
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="tv-card"
                      >
                        <Link
                          to={`/diziDetail/${film.id}`}
                          className="tv-card-image"
                        >
                          <img src={IMG_API + film.poster_path} alt="" />
                        </Link>
                      </motion.div>
                    ))}
                  </Fade>
                </div>
              )}
            </div>
            <div className="tv-button">
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

export default AllTV;
