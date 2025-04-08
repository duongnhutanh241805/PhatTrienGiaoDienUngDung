import React from "react";
import { NavLink } from "react-router-dom";
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
              <NavLink
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: " rgb(118, 117, 117)",
                }}
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img src={li1} />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: " rgb(118, 117, 117)",
                }}
                to="/projects"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img src={li2} />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: " rgb(118, 117, 117)",
                }}
                to="/teams"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img src={li3} />
                Teams
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: " rgb(118, 117, 117)",
                }}
                to="/analytics"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img src={li4} />
                Analytics
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: " rgb(118, 117, 117)",
                }}
                to="/messages"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img src={li5} />
                Messages
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: " rgb(118, 117, 117)",
                }}
                to="/intergrations"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img src={li6} />
                Intergrations
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default nav;
