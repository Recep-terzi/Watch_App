import React, { useEffect, useState } from "react";
import "./DiziSection.Module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DiziSection = () => {
  const [data, setData] = useState();
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=466279f06d7f82ea9024d440431f8663&language=e&page=tr-TR"
      )
      .then((data) => setData(data.data));
  }, []);
  return (
    <>
      <div className="dizi-section" id="dizi-section">
        <div className="container">
          <div className="dizi-section-title">Popüler Diziler</div>
        </div>
        {data && (
          <>
            <div className="carousel-div">
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
                    items: 2,
                    partialVisibilityGutter: 30,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 2,
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
                {data.results.map((dizi, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.2,
                    }}
                  >
                    <Link to={`/diziDetail/${dizi.id}`}>
                      <img src={IMG_API + dizi.poster_path} alt="" />
                    </Link>
                  </motion.div>
                ))}
              </Carousel>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DiziSection;
