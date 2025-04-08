import React from 'react'
import './Intergrations.css'
import Nav from "../../component/nav/Nav";
import Header from "../../component/header/Header";
import Overview from "../../component/Overview/Overview";
import DataTable from "../../component/DataTable/DataTable";
const Intergrations = () => {
  return (
    <div className="dashboard-container">
    <div className="bentrai">
      <Nav></Nav>
    </div>
    
    <div className="benphai">
      <Header></Header>
      <Overview></Overview>
      <DataTable></DataTable>
    </div>
  </div>
  )
}

export default Intergrations