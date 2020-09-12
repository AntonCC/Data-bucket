import React from 'react'
import './sidebar.scss'
import { Link } from 'react-router-dom'

const Sidebar = ({ open, handleSidebar }) => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/singin">Sign Up</Link></li>
        </ul>
      </nav>
    </div>
  )
}
export default Sidebar