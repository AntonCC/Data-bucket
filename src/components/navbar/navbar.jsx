import React, { useContext } from 'react'
import { SignContext } from '../../contexts/signContext'
import './navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import Button from '../button/button'
import { ReactComponent as Hamburger} from '../../img/icons/bars-solid.svg'

const Navbar = ({ handleSidebar }) => {
  const [sign, setSign] = useContext(SignContext)
  const signIn = () => {
    // false renders Sign In
    setSign(false)
  }

  const signUp = () => {
    // true renders Sign Up
    setSign(true)
  }

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h2>Data <span className="fade">Bucket</span></h2>
          </Link>
        </div>
        <ul className="nav-list">
          <li><NavLink tag={NavLink} activeClassname="active" to='/explore'>Explore</NavLink></li>
          <li><NavLink tag={NavLink} activeClassname="active" to='/about'>About</NavLink></li>
          <li><NavLink tag={NavLink} activeClassname="active" to='/pricing'>Pricing</NavLink></li>
        </ul>
        <div className="cta-group">
          <Link to="/signin" onClick={signIn}>
            <Button buttonStyle="btn-outline">Login</Button>
          </Link>
          <Link to="/signin" onClick={signUp}>
            <Button buttonStyle="btn-primary">Sign Up</Button>
          </Link>
        </div>
        <div className="mobile-hamburger" onClick={handleSidebar}>
          <Hamburger />
        </div>
      </div>
    </div>
  )
}
export default Navbar