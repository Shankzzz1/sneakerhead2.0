import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../styling/card2.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



const Card2 = ({data}) => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={false}    
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {data.map((imageUrl, index) => (
          <div className="slider" key={index}>
            <img className="sliderimg" src={imageUrl.url} alt="member product" />
            <div className="textinfo-card2">
              <h4 className="Subtext-card2">{imageUrl.text1}</h4>
              <h2 className="Maintext-card2">{imageUrl.Maintext}</h2>
              <button className="Btn-card2">{imageUrl.btntext}</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Card2;
