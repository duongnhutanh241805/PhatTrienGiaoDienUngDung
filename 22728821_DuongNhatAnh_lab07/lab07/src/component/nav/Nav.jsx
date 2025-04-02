import React from 'react'
import './Nav.css'

const nav = () => {
  return (
    <div className='main_nav'>
        <div className='khung'>
        <div className='main_find'>
        <header className="header">
          <h2>Dashboard</h2>
          <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'35%'}}>
            <input type="text" placeholder="Search..." className="search-box" />
          <p>33</p>
          <p>?</p>
          <img src="" alt="avata" />
          </div>
          
        </header>
        
        

        </div>
        </div> <h2 style={{ margin: "15px"}}>Overview</h2>
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
        <div className='report_main' style={{ margin: "15px",display:'flex',alignItems:'center',justifyContent:'space-between'}}>
           <h2>Detailed report</h2> 
           <div >
            <button>import</button>
           <button>Export</button>
           </div>
           
        </div>
        <div className='table_main'>
        <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Order Value</th>
                <th>Order Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>

                <tr >
                  <td>zzz</td>
                  <td>zzz</td>
                  <td>zzzzz</td>
                  <td>zzzz</td>
                  <td> zzzz</td>
                </tr>
       
            </tbody>
          </table>
        </div>
        
    
     


    </div>
    
  )
}

export default nav