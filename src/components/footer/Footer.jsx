import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>10726</h2>
            <span>TRADITIONAL DISHES</span>
          </div>
          <div className="item">
            <h2>5987</h2>
            <span>LOCAL INGREDIENTS</span>
          </div>
          <div className="item">
            <h2>5987</h2>
            <span>AUTHENTIC RESTAURANTS</span>
          </div>
          <div className="item">
            <h2>50083</h2>
            <span>FOOD EXPERTS</span>
          </div>
          <div className="item">
            <h2>150083</h2>
            <span>ORIGINAL RECIPES</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Kitchen Genie</h2>
            <span>
              © 2023 KitchenGenieMedia Ltd. (EU) - All Rights Reserved
            </span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/images/twitter.png" alt="twitter logo" />
              <img src="/images/facebook.png" alt="facebook logo" />
              <img src="/images/linkedin.png" alt="linkedin logo" />
              <img src="/images/pinterest.png" alt="pinterest logo" />
              <img src="/images/instagram.png" alt="instagram logo" />
              <img src="/images/tiktok.png" alt="tiktok logo" />
            </div>
            <div className="link">
              <img src="/images/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/images/coin.png" alt="currency logo" />
              <span>USD</span>
            </div>
            <img src="/images/accessibility.png" alt="accessibility logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
