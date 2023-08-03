import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div>
       <nav className="navbar">
       
    <div className="navbar-container">
      <a className="navbar-brand" href="/">Wellfound:</a>
       {/* hidden visible property */}
      <div className="tooltip">Welcome
  <span className="tooltiptext">Tooltip text</span>
</div>



      <ul className="nav-menu">
        <li className="nav-item">
        
          <input className="input" type="text" /> <i className="fas fa-search" />
      
          </li>
        <li className="nav-item"><a href="/"><i className="fas fa-bell"/></a></li>
        <li className="nav-item"><a href="/"><i className="fas fa-ellipsis-v"/></a></li>
        <li className="nav-item"><a href="/"><i className="fas fa-user"/></a></li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Navbar