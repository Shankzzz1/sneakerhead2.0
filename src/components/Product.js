import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../styling/product.css";

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



const Product = ({data}) => {
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
          <div>
          <div className="slider-prod" key={index}>
            <img className="sliderimg-prod" src={imageUrl.url} alt="member product" />
          </div>
          <div className="textinfo-prod-card2">
              <h4 className="Subtext-prod-card2">{imageUrl.Name}</h4>
              <h2 className="Maintext-prod-card2">{imageUrl.Category}</h2>
              <a className="Btn-prod-card2" href="/">MRP : &#8377; {imageUrl.Price}</a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Product;
