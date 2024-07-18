import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../styling/cards.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // changed to 1 for smoother transitions
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2, // reduced to 2 for better viewing on tablets
    slidesToSlide: 1 // changed to 1 for smoother transitions
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1, // reduced to 1 for better viewing on mobile devices
    slidesToSlide: 1 // changed to 1 for smoother transitions
  }
};


const Card = ({data}) => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={false} // changed to true for a continuous loop
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {data.map((imageUrl, index) => (
          <div className="slider" key={index}>
            <img className="sliderimg" src={imageUrl.url} alt="shoe" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Card;
  