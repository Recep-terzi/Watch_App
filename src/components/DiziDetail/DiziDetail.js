import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Iframe from "react-iframe";
import "./DiziDetail.Module.css";
import { TiTick } from "react-icons/ti";

const DiziDetail = () => {
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
        `https://api.themoviedb.org/3/tv/${id}?api_key=466279f06d7f82ea9024d440431f8663&language=tr-TR`
      )
      .then((data) => setDetail(data.data));
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `
        https://api.themoviedb.org/3/tv/${id}/season/1/videos?api_key=466279f06d7f82ea9024d440431f8663&language=en-US`
      )
      .then((data) => setVideo(data.data));
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="container dizi-container">
        {video && (
          <>
            {video.results.length === 0 ? (
              <></>
            ) : (
              <>
                <Iframe
                  url={
                    video
                      ? video.results[3] === undefined
                        ? `https://www.youtube.com/embed/${video.results[0].key}?autoplay=true`
                        : `https://www.youtube.com/embed/${video.results[3].key}?autoplay=true`
                      : null
                  }
                  //   url="https://www.youtube.com/embed/Q73UhUTs6y0?autoplay=true"
                  frameBorder={0}
                  width="100%"
                  height="500px"
                  id=""
                  className="dizi-video"
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
              className={`dizi-detail ${
                video && (video.results.length === 0 ? "none-video" : "")
              }`}
            >
              <div className="dizi-detail-left">
                <img
                  src={
                    detail.backdrop_path === null
                      ? IMG_API + detail.poster_path
                      : IMG_API + detail.backdrop_path
                  }
                  className={detail.backdrop_path === null ? "null-image" : ""}
                  alt="Dizi'nin g??rseli."
                />
              </div>
              <div className="dizi-detail-right">
                <div className="dizi-detail-title">
                  <div className="dizi-detail-title-left">{detail.name}</div>
                  <div className="dizi-detail-title-right tooltip">
                    <TiTick />
                    <div className="tooltiptext">Liste'ye ekle</div>
                  </div>
                </div>
                <div className="dizi-detail-description">{detail.overview}</div>
                <div className="dizi-detail-menu">
                  <div className="dizi-detail-right-right">
                    <div className="dizi-detail-average">
                      IMDB : {detail.vote_average}
                    </div>
                    <div className="dizi-detail-language">
                      Orjinal Dil : {detail.spoken_languages[0].english_name}
                    </div>
                    <div className="dizi-detail-seasons">
                      Sezon Say??s?? : {detail.number_of_seasons}
                    </div>
                    <div className="dizi-detail-episodes">
                      B??l??m say??s?? : {detail.number_of_episodes}
                    </div>
                    <p className="dizi-first-date">
                      ??lk yay??n tarihi : {detail.first_air_date}
                    </p>
                  </div>
                  <div className="dizi-detail-right-left">
                    <div className="dizi-genres">
                      <p>T??r : </p>
                      <ul>
                        {detail.genres.map((gen) => (
                          <>
                            <li>{gen.name}</li>
                          </>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="dizi-link">
                  <p>??zlemek i??in </p>
                  <div className="network">
                    {detail.networks.map((network) => (
                      <a href={detail.homepage}>
                        <img
                          src={IMG_API + network.logo_path}
                          alt="Network resim icon"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DiziDetail;
