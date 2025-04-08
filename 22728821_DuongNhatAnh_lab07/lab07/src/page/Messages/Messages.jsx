import React from 'react'
import './Messages.css'
import Nav from "../../component/nav/Nav";
import Header from "../../component/header/Header";

const Messages = () => {
  return (
    <div className="dashboard-container">
    <div className="bentrai">
      <Nav></Nav>
    </div>
    
    <div className="benphai">
      <Header></Header>
      Messages
    </div>
  </div>
  )
}

export default Messages