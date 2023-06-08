import "./Spotlight.scss";
// import Slider from "infinite-react-carousel";
import Slider from "infinite-react-carousel";

import React from "react";

const spotlight = () => {
  return (
    <div className="spotlight">
      <div className="container">
        <Slider slidesToShow={3} arrowsScroll={1}>
          <div className="spotCard">
            <div className="containerOfOne">
              <img
                className="spotImage"
                src="https://cdn.tasteatlas.com/images/regions/8f928125b6c944f887467d5b5535e0c2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="spotCard">
            <div className="containerOfTwo">
              <img
                className="spotImage"
                src="https://cdn.tasteatlas.com/Images/Dishes/9a9d8260bd2647dc946047bacc9aa57c.jpg"
                alt=""
              />
            </div>
            <div className="containerOfTwo">
              <img
                className="spotImage"
                src="https://cdn.tasteatlas.com/images/regions/8f928125b6c944f887467d5b5535e0c2.jpg"
                alt=""
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default spotlight;
