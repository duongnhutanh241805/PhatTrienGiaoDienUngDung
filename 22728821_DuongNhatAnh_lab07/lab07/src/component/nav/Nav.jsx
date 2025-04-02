import React from 'react'
import './Nav.css'

const nav = () => {
  return (
    <div className='main_nav'>
        <div className='khung'>
        <div className='main_find'>
        <header className="header">
          <h2>Dashboard</h2>
          <input type="text" placeholder="Search..." className="search-box" />
        </header>
        
        

        </div></div> <h2>Overview</h2>
<div className='card_Tb'>
           
    <div className="card turnover">
            <h3>Turnover</h3>
            <p>$92,405</p>
          </div>
          <div className="card profit">
            <h3>Profit</h3>
            <p>$32,218</p>
          </div>
          <div className="card customers">
            <h3>New Customers</h3>
            <p>298</p>
          </div>

        </div>
    
     


    </div>
    
  )
}

export default nav