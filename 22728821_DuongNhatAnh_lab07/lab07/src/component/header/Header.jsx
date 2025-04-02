import React from 'react'
import './Header.css'

 const Header = () => {
  return (
    <div className='main_head'>
      <aside className="sidebar">
        <h2 className="logo">Logo</h2>
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
