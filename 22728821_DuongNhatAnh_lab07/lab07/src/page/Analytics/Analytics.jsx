import React from "react";
import "./Analytics.css";
import Nav from "../../component/nav/Nav";
import Header from "../../component/header/Header";
const Analytics = () => {
  return (
    <div className="dashboard-container">
      <div className="bentrai">
        <Nav></Nav>
      </div>

      <div className="benphai">
        <Header bien={"Analytics"}></Header>
        Analytics
      </div>
    </div>
  );
};

export default Analytics;
