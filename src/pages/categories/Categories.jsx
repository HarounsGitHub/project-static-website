import "./Categories.scss";
import { useState } from "react";

const Categories = () => {
  const [sort, setSort] = useState("sales");
  const [drop, setDrop] = useState(false);

  const reSort = (type) => {
    setSort(type);
    setDrop(false);
  };

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
            <span className="sortType">
              {sort === "sales" ? "Top Selling" : "Newest"}
            </span>
            <img
              src="./images/down.png"
              alt="down arrow"
              onClick={() => setDrop(!drop)}
            />

            {drop && (
              <div className="rightMenu">
                <span onClick={() => reSort("createdAt")}>Newest</span>
                <span onClick={() => reSort("sales")}>Top Selling</span>
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
