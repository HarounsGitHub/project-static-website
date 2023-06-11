import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.scss";
// import { cards } from "../../data";
// import Slide from "../slide/Slide";

function RecipeCard({ item }) {
  return (
    <Link to="/" className="link">
      <div className="recipeCard">
        <img src={item.img} alt="recipe picture" />
        <div className="info">
          <img src={item.pp} alt="the recipe owner and/or provider" />
          <div className="texts">
            <h2>{item.category}</h2>
            <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default RecipeCard;
