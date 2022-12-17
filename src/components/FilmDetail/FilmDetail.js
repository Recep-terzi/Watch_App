import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Iframe from "react-iframe";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./FilmDetail.Module.css";
import imdb_image from "../../assets/imdb.png";
const FilmDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const [video, setVideo] = useState();
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
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
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=466279f06d7f82ea9024d440431f8663&language=tr-TR`
      )
      .then((data) => setDetail(data.data));
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/${id}/videos?api_key=466279f06d7f82ea9024d440431f8663&language=en-US`
      )
      .then((data) => setVideo(data.data));
  }, [id]);

  return (
    <>
      <div className="container film-container">
        <Navbar />
        {video && (
          <>
            {video.results.length === 0 ? (
              <></>
            ) : (
              <>
                <Iframe
                  url={
                    video
                      ? `https://www.youtube.com/embed/${video.results[0].key}?autoplay=true`
                      : null
                  }
                  //   url="https://www.youtube.com/embed/Q73UhUTs6y0?autoplay=true"
                  frameBorder={0}
                  width="100%"
                  height="500px"
                  id=""
                  className="film-video"
                  display="block"
                  position="relative"
                />
              </>
            )}
          </>
        )}

        {detail && (
          <>
            <div
              className={`film-detail ${
                video && (video.results.length === 0 ? "none-video" : "")
              }`}
            >
              <div className="film-detail-left">
                <img
                  src={IMG_API + detail.backdrop_path}
                  alt="film'nin görseli."
                />
              </div>
              <div className="film-detail-right">
                <div className="film-detail-title">{detail.original_title}</div>
                <div className="film-detail-description">{detail.overview}</div>
                <div className="film-detail-menu">
                  <div className="film-detail-right-right">
                    <div className="film-detail-average">
                      IMDB : {detail.vote_average}
                    </div>
                    <div className="film-detail-language">
                      Orjinal Dil : {detail.spoken_languages[0].english_name}
                    </div>
                    <div className="film-detail-seasons">
                      Film Süresi : {detail.runtime} dakika
                    </div>
                    {detail.tagline && (
                      <div className="film-detail-episodes">
                        Tag : {detail.tagline}
                      </div>
                    )}

                    <p className="film-first-date">
                      Vizyon tarihi : {detail.release_date}
                    </p>
                  </div>
                  <div className="film-detail-right-left">
                    <div className="film-genres">
                      <p>Tür : </p>
                      <ul>
                        {detail.genres.map((gen, index) => (
                          <div key={index}>
                            <li>{gen.name}</li>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="film-link">
                  <p>İzlemek için </p>
                  <a
                    href={`https://www.imdb.com/title/${detail.imdb_id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={imdb_image} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FilmDetail;