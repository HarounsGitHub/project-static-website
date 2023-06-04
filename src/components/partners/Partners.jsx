import "./Partners.scss";

import React from "react";

const Partners = () => {
  return (
    <div className="partners">
      <span>
        <i>our partners:</i>
      </span>
      <div className="container">
        <img
          src="./images\partners\Bon_Appétit_logo.svg"
          alt="Bon Appetit logo"
        />
        <img src="./images\partners\delish-logo-vector.png" alt="delish logo" />
        <img
          style={{ height: "40px" }}
          src="./images\partners\harpercollins-logo.svg"
          alt="harpercollins"
        />
        <img
          src="./images\partners\Penguin_Random_House.svg"
          alt="Penguin Random House"
        />
        <img
          src="./images\partners\printvisual-logo.gif"
          alt="Gourmet magazine logo"
        />
        <img
          src="./images\partners\Self_magazine_logo.svg"
          alt="self magazine logo"
        />
      </div>
    </div>
  );
};

export default Partners;
