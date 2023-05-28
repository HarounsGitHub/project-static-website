import React, { useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [drop, setDrop] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
  }, []);

  const currentUser = {
    id: 0,
    username: "Joe Johnson",
    isSeller: true,
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="kitchen">Kitchen</span>
          <span className="genie">Genie</span>
          {/* </Link> */}
        </div>
        <div className="links">
          <span>Menu</span>
          <span>Search</span>
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
                      <span>Recipes</span>
                      <span>Add New Recipes</span>
                      <span>Messages</span>
                      <span>Orders</span>
                      <span>Logout</span>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Drop 1</span>
            <span>Drop 2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
