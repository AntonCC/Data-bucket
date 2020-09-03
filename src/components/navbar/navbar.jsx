import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h2>Data Bucket</h2>
        </div>
        <ul className="nav-list">
          <li><Link to='/'>Create</Link></li>
          <li><Link to='/'>Tools</Link></li>
          <li><Link to='/'>Explore</Link></li>
          <li><Link to='/'>Learn</Link></li>
          <li><Link to='/'>Pricing</Link></li>
          <li><Link to='/'>About</Link></li>
        </ul>
        <div className="cta-group">

        </div>
      </div>
    </div>
  )
}
export default Navbar