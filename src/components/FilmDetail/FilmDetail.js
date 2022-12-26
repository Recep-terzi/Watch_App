import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Iframe from "react-iframe";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./FilmDetail.Module.css";
import imdb_image from "../../assets/imdb.png";
import notImage from "../../assets/not-image.webp";
import { TiTick } from "react-icons/ti";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { myList } from "../../redux/watchSlice";
import alertify from "alertifyjs";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const CharacterDetail = () => {
  const { id } = useParams();

  const [chacDetail, setChacDetail] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=466279f06d7f82ea9024d440431f8663&language=en-US`
      )
      .then((data) => setChacDetail(data.data));
  }, [id]);
  return (
    <>
      {chacDetail && (
        <div className="character-detail-card">
          {chacDetail.cast.map((detail) => (
            <div className="card-body">
              <div className="card-image">
                <img
                  src={
                    detail.profile_path === null
                      ? `${notImage}`
                      : `${IMG_API}${detail.profile_path}`
                  }
                  alt=""
                />
              </div>
              <div className="card-detail">
                <div className="card-title">{detail.name}</div>
                <h2 className="card-character">{detail.character}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
const CommentDetail = () => {
  const [reviews, setReviews] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `        https://api.themoviedb.org/3/movie/${id}/reviews?api_key=466279f06d7f82ea9024d440431f8663&language=en-US&page=1
        `
      )
      .then((data) => setReviews(data.data));
  }, [id]);

  return (
    <>
      {reviews && (
        <div className="reviews-detail">
          {reviews.results.map((review) => (
            <div className="reviews-detail-body">
              <div className="review-left">
                <img src={IMG_API + review.author_details.avatar_path} alt="" />
              </div>
              <div className="review-right">
                <div className="review-content">{review.content}</div>
                <div className="create-review">{review.created_at}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
const FilmDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const [video, setVideo] = useState();
  const videoEl = useRef(null);
  const [selected, setSelected] = useState("");
  const user = useSelector((state) => state.watch.user);
  const mylist = useSelector((state) => state.watch.myList);
  const dispatch = useDispatch();
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
    const ref = collection(db, "myList");
    const q = query(ref, where("email", "==", user ? user?.email : null));
    const unsub = onSnapshot(q, (snap) => {
      dispatch(
        myList(
          snap.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        )
      );
    });
    return unsub;
  }, [dispatch, user]);
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

  const handleAddList = async (e) => {
    e.preventDefault();

    const doc = {
      id: id,
      filmdId: detail.id,
      poster_path: detail.poster_path,
    };
    const ref = collection(db, "myList");
    try {
      await addDoc(ref, {
        ...doc,
        email: user.email,
      });
      alertify.success("Liste'ye eklendi. İzlemeyi unutma. :)");
    } catch (error) {
      console.log(error);
    }
  };

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
        <div className="select-film-detail">
          <ul>
            <li onClick={() => setSelected("")}>Film Detay</li>
            <li onClick={() => setSelected("karakter")}>Film Karakterleri</li>
            <li onClick={() => setSelected("yorum")}>Film Yorumları</li>
          </ul>
        </div>
        {detail && selected === "" && (
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
                <div className="film-detail-title">
                  <div className="film-detail-title-left">
                    {detail.original_title}
                  </div>
                  {mylist
                    .map((list) => list.filmdId)
                    .filter((list) => list === detail.id).length === 0 && (
                    <div
                      className="film-detail-title-right tooltip"
                      onClick={handleAddList}
                    >
                      <TiTick />
                      <div className="tooltiptext">Liste'ye ekle</div>
                    </div>
                  )}
                </div>
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
        {selected === "yorum" && (
          <>
            <p className="deneme2">
              <CommentDetail />
            </p>
          </>
        )}
        {selected === "karakter" && (
          <>
            <p className="deneme">
              <CharacterDetail />
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default FilmDetail;
