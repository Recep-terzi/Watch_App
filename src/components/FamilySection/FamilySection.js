import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const FamilySection = () => {
  const [data, setData] = useState();

  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=466279f06d7f82ea9024d440431f8663&with_genres=10751"
      )
      .then((data) => setData(data.data));
  }, []);
  return (
    <div className="film-section" id="film-section">
      <div className="container">
        <div className="film-section-title">Çocuk Filmleri</div>
      </div>
      <div className="film-carousel-div">
        {data && (
          <>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className="dizi-carousel"
              containerClass="container"
              dotListClass="dizi-carousel-list"
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass="dizi-carousel-item"
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 5,
                  partialVisibilityGutter: 40,
                },

                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 20,
                },
              }}
              rewind={false}
              rewindWithAnimation={true}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {data.results.map((movie, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  <Link to={`/detail/${movie.id}`}>
                    <img src={IMG_API + movie.poster_path} alt="" />
                  </Link>
                </motion.div>
              ))}
            </Carousel>
          </>
        )}
      </div>
    </div>
  );
};

export default FamilySection;
