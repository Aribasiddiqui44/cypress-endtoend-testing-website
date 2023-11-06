import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbartitle'>
           <h1>Website</h1>
        </div>
        
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
    
    </div>
  )
}
export default Navbar
