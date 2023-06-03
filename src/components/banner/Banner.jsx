import "./Banner.scss";

import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        {/* <div className="bgLeft">
          <img src="./images/bgslice1.png" alt="background food image" />
        </div> */}
        <div className="bg">
          <img src="./images/background.png" alt="background food image" />
        </div>
        <div className="center">
          <h1>
            Find the <i>perfect</i> Recipe
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./images/search.png" alt="search" />
              <input type="text" placeholder="search a recipe" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular recipes:</span>
            <button>Asado</button>
            <button>Binagoongan</button>
            <button>Churrasco</button>
            <button>Chutney</button>
            <button>Guacamole</button>
            <button>Paela</button>
            <button>Teriyaki</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
