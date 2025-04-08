import React from 'react'
import './Projects.css'
import Nav from "../../component/nav/Nav";
import Header from "../../component/header/Header";
const Projects = () => {
  return (
    <div className="dashboard-container">
    <div className="bentrai">
      <Nav></Nav>
    </div>
    
    <div className="benphai">
      <Header></Header>
      Projects
    </div>
  </div>
  )
}

export default Projects