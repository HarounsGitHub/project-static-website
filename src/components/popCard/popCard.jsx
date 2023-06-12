import React from "react";
import { Link } from "react-router-dom";
import "./PopCard.scss";
// import { cards } from "../../data";
// import Slide from "../slide/Slide";

function PopCard({ card }) {
  return (
    <Link to="/categories?category=dessert">
      <div className="popCard">
        <img src={card.img} alt="" />
        <div className="overlay"></div>
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
}
export default PopCard;
