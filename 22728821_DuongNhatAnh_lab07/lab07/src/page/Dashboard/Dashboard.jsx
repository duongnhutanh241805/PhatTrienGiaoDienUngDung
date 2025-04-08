import React from "react";
import "./Dashboard.css";
import Nav from "../../component/nav/Nav";
import Header from "../../component/header/Header";
import Overview from "../../component/Overview/Overview";
import DataTable from "../../component/DataTable/DataTable";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="bentrai">
        <Nav></Nav>
      </div>
      
      <div className="benphai">
        <Header bien={"Dashboard"}></Header>
        <Overview></Overview>
        <DataTable></DataTable>
      </div>
    </div>
  );
};

export default Dashboard;
