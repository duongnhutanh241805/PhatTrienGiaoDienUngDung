import React from "react";
import "./Teams.css";
import Nav from "../../component/nav/Nav";
import Header from "../../component/header/Header";
const Teams = () => {
  return (
    <div className="dashboard-container">
      <div className="bentrai">
        <Nav></Nav>
      </div>

      <div className="benphai">
        <Header></Header>
        Teams
      </div>
    </div>
  );
};

export default Teams;
