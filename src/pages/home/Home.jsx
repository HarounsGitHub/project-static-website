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
      <Slide slidesToShow={slidesToShow} arrowsScroll={slidesToShow}>
        {recipes.map((item) => (
          <RecipeCard key={item.id} item={item} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
