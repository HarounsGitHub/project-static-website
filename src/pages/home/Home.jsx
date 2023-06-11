import React from "react";
import Banner from "../../components/banner/Banner";
import Partners from "../../components/partners/Partners";
import Slide from "../../components/slide/Slide";
import { cards, recipes } from "../../data";
import PopCard from "../../components/popCard/popCard";
import "./Home.scss";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import { useState, useEffect } from "react";

const Home = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };

    // Call handleResize on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="home">
      <Banner />
      <Slide slidesToShow={slidesToShow} arrowsScroll={slidesToShow}>
        {cards.map((card) => (
          <PopCard key={card.id} card={card} />
        ))}
      </Slide>
      <Partners />
      {/* <Spotlight /> */}
      {/* <Collage /> */}
      {/* <div className="collage">
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
      </div> */}
      <Slide slidesToShow={slidesToShow} arrowsScroll={slidesToShow}>
        {recipes.map((item) => (
          <RecipeCard key={item.id} item={item} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
