import React from "react";
import "./DiziSection.Module.css";
import need from "../../assets/need.jpg";
import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const DiziSection = () => {
  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="dizi-section-title">Diziler</div>
        </div>
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
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
            <img src={need} alt="" />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default DiziSection;
