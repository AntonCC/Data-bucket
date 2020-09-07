import React, { useContext } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import Button from '../button/button'
import { ReactComponent as Hamburger} from '../../img/icons/bars-solid.svg'
import { SignContext } from '../../contexts/signContext'

const Navbar = () => {
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
          <li><Link to='/explore'>Explore</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/pricing'>Pricing</Link></li>
        </ul>
        <div className="cta-group">
          <Link to="/signin" onClick={signIn}>
            <Button buttonStyle="btn-outline">Login</Button>
          </Link>
          <Link to="/signin" onClick={signUp}>
            <Button buttonStyle="btn-primary">Sign Up</Button>
          </Link>
        </div>
        <div className="mobile-hamburger">
          <Hamburger />
        </div>
      </div>
    </div>
  )
}
export default Navbar