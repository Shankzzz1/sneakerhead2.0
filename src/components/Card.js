import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import shoe from "../Images/Airforce.jpeg"
import shoe2 from "../Images/shoe2.jpeg"
import shoe3 from "../Images/shoe3.jpeg"
import shoe4 from "../Images/shoe4.jpeg"
import "../styling/cards.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:shoe
  },
  {
    url:shoe2
      
  },
  //Second image url
  {
    url:shoe3
  },
  //Third image url
  {
    url:shoe4
  },
  //Fourth image url
  {
    url:shoe
  }
];
const Card = () => {
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
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img className="sliderimg" src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Card;
