import React from 'react'
import './Header.css'
import logo from '../../img/Image 1858.png'
 const Header = () => {
  return (
    <div className='main_head'>
      <aside className="sidebar">
        <img src={logo} style={{width:'40%',height:'10%'}}/>
        <nav className="menu">
          <ul>
            <li className="active">Dashboard</li>
            <li>Projects</li>
            <li>Teams</li>
            <li>Analytics</li>
            <li>Messages</li>
            <li>Intergrations</li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default Header;
