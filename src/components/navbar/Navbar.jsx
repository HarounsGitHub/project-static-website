import React, { useEffect } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [drop, setDrop] = useState(false);
  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 0,
    username: "Joe Johnson",
    isSeller: true,
  };

  return (
    <div className={active || pathname != "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="kitchen">Kitchen</span>
            <span className="genie">Genie</span>
          </Link>
        </div>
        <div className="links">
          <span>Search</span>
          <span>Menu</span>
          {!currentUser && <span>Log In</span>}
          {!currentUser?.isSeller && <span>Sell your recipes</span>}
          {!currentUser && <button>Sign Up</button>}
          {currentUser && (
            <div className="user" onClick={() => setDrop(!drop)}>
              <img
                src="https://m.media-amazon.com/images/I/51HdteT4kSL._AC_SY879_.jpg"
                alt="user"
              />
              <span>{currentUser?.username}</span>
              {drop && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/categories">
                        Recipes
                      </Link>
                      <Link className="link" to="/add">
                        Add New Recipes
                      </Link>
                      <Link className="link" to="/messages">
                        Messages
                      </Link>
                      <Link className="link" to="/orders">
                        Orders
                      </Link>
                      <Link className="link" to="/">
                        Logout
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active ||
        (pathname != "/" && (
          <>
            <hr />
            <div className="menu">
              <Link className="link" to="/">
                POPULAR
              </Link>
              <Link className="link" to="/">
                MEAL
              </Link>
              <Link className="link" to="/">
                DISH
              </Link>
              <Link className="link" to="/">
                DIET
              </Link>
              <Link className="link" to="/">
                INGREDIENT
              </Link>
              <Link className="link" to="/">
                CUISINE
              </Link>
              <Link className="link" to="/">
                HOLIDAY & SEASON
              </Link>
              <Link className="link" to="/">
                TOOL & TECHNIQUE
              </Link>
            </div>
          </>
        ))}
    </div>
  );
};

export default Navbar;
