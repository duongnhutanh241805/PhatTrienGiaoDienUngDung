import React from "react";
import "./Nav.css";
import logo from "../../img/Image 1858.png";
import li1 from "../../img/Squares four 1.png";
import li2 from "../../img/Folder.png";
import li3 from "../../img/Groups.png";
import li4 from "../../img/Pie chart.png";
import li5 from "../../img/Chat.png";
import li6 from "../../img/Code.png";

const nav = () => {
  return (
    <div>
      <aside className="sidebar">
        <img src={logo} className="logo" />
        <nav className="menu">
          <ul>
            <li className="active">
              <img src={li1} />
              Dashboard
            </li>
            <li>
              <img src={li2} />
              Projects
            </li>
            <li>
              <img src={li3} />
              Teams
            </li>
            <li>
              <img src={li4} />
              Analytics
            </li>
            <li>
              <img src={li5} />
              Message
            </li>
            <li>
              <img src={li6} />
              Intergrations
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default nav;
