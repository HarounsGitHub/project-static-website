import "./Categories.scss";
import { useState } from "react";

const Categories = () => {
  const [drop, setDrop] = useState(false);

  return (
    <div className="categories">
      <div className="container">
        <span className="breadcrumbs">KitchenGenie / Desserts </span>
        <h1>Italian Dishes & Desserts</h1>
        <p>
          Find the best recipes made by our community! <br></br>
          <strong>Hint:</strong> some can literally cook the recipes and deliver
          for you!
        </p>
        <div className="menus">
          <div className="left">
            <span>Budget</span>
            <input type="number" placeholder="minimum" />
            <input type="number" placeholder="maximum" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType"></span>
            <img
              src="./images/down.png"
              alt="down arrow"
              onClick={() => setDrop(!drop)}
            />

            {drop && (
              <div className="rightMenu">
                <span>Newest</span>
                <span>Top Selling</span>
                <span>Most Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards"></div>
      </div>
    </div>
  );
};

export default Categories;
