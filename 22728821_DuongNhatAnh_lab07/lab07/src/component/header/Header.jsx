import React from "react";
import "./Header.css";

import Chuong from "../../img/Bell 1.png";
import Avata from "../../img/Avatar (1).png";
import Chamhoi from "../../img/Question 1.png";
const Header = () => {
  return (
    <div>
      <header className="header">
        <p
          style={{
            fontWeight: "bold",
            color: "#e84d81",
            font: "icon",
            fontSize: "20px",
          }}
        >
          Dashboard
        </p>
        <div className="right">
          <input type="text" className="search-box" placeholder="Search..." />
          <img src={Chuong} />
          <img src={Chamhoi} />
          <img src={Avata} />
        </div>
      </header>
    </div>
  );
};

export default Header;
