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
            <img
              src="https://cdn.tasteatlas.com/images/regions/8f928125b6c944f887467d5b5535e0c2.jpg"
              alt=""
            />
          </div>
          <div className="twoImages spotCard">
            <div>
              <img
                src="https://cdn.tasteatlas.com/Images/Dishes/9a9d8260bd2647dc946047bacc9aa57c.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cdn.tasteatlas.com/images/regions/8f928125b6c944f887467d5b5535e0c2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="twoImages spotCard">
            <div>
              <img
                src="https://cdn.tasteatlas.com/Images/Dishes/9a9d8260bd2647dc946047bacc9aa57c.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cdn.tasteatlas.com/images/regions/8f928125b6c944f887467d5b5535e0c2.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="spotCard">
            <img
              src="https://cdn.tasteatlas.com/images/regions/8f928125b6c944f887467d5b5535e0c2.jpg"
              alt=""
            />{" "}
          </div>

          <div className="spotCard">
            <img
              src="https://cdn.tasteatlas.com/images/regions/8f928125b6c944f887467d5b5535e0c2.jpg"
              alt=""
            />{" "}
          </div>

          <div className="spotCard">
            <img
              src="https://cdn.tasteatlas.com/images/regions/8f928125b6c944f887467d5b5535e0c2.jpg"
              alt=""
            />{" "}
          </div>

          <div className="spotCard">
            <img
              src="https://cdn.tasteatlas.com/images/regions/8f928125b6c944f887467d5b5535e0c2.jpg"
              alt=""
            />{" "}
          </div>
        </Slider>
        {/* <Slider className="slide" slidesToShow={3} arrowsScroll={3}>
          <div className="collage">
            <img
              className="collage-row-2"
              src="https://cdn.tasteatlas.com/images/regions/8f928125b6c944f887467d5b5535e0c2.jpg"
              alt=""
            />
            <img
              src="https://cdn.tasteatlas.com/Images/Dishes/9a9d8260bd2647dc946047bacc9aa57c.jpg"
              alt=""
            />
            <img
              src="https://cdn.tasteatlas.com/images/ingredients/b3d83fe75c5342518f4396885f63ac72.jpg"
              alt=""
            />
            <img
              src="https://cdn.tasteatlas.com/Images/Regions/78684a5482d24820b83e479ae457d7eb.jpg"
              alt=""
            />
            <img
              src="https://cdn.tasteatlas.com/images/regions/1771dd25eec14815a899b4b640fa0f24.jpg"
              alt=""
            />
            <img
              className="collage-row-2"
              src="https://cdn.tasteatlas.com/images/regions/8f928125b6c944f887467d5b5535e0c2.jpg"
              alt=""
            />
            <img
              className="collage-row-2"
              src="https://cdn.tasteatlas.com/images/regions/8f928125b6c944f887467d5b5535e0c2.jpg"
              alt=""
            />
          </div>
        </Slider> */}
      </div>
    </div>
  );
};

export default spotlight;
