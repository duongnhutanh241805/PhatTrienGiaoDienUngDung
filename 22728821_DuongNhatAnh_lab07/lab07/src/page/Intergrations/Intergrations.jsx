import React from 'react'
import './Intergrations.css'

import Nav from "../../component/nav/Nav";
import Header from "../../component/header/Header";

const Intergrations = () => {
  return (
    <div className="dashboard-container">
    <div className="bentrai">
      <Nav></Nav>
    </div>
    
    <div className="benphai">
      <Header></Header>
      Intergrations
    </div>
  </div>
  )
}

export default Intergrations