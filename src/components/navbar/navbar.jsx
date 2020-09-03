import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import Button from '../button/button'
import { ReactComponent as Hamburger} from '../../img/icons/bars-solid.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h2>Data <span className="fade">Bucket</span></h2>
        </div>
        <ul className="nav-list">
          <li><Link to='/'>Create</Link></li>
          <li><Link to='/'>Tools</Link></li>
          <li><Link to='/'>Explore</Link></li>
          <li><Link to='/'>Learn</Link></li>
          <li><Link to='/'>Pricing</Link></li>
        </ul>
        <div className="cta-group">
          <Button buttonStyle="btn-outline">Login</Button>
          <Button buttonStyle="btn-primary">Sign Up</Button>
        </div>
        <div className="mobile-hamburger">
          <Hamburger />
        </div>
      </div>
    </div>
  )
}
export default Navbar