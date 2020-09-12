import React, { useContext } from 'react'
import { SignContext } from '../../contexts/signContext'
import './sidebar.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Cross } from '../../img/icons/times-solid.svg'

const Sidebar = ({ sidebar, handleSidebar }) => {
  const [sign, setSign] = useContext(SignContext)

  const signIn = () => {
    // false renders Sign In
    setSign(false)
  }

  const signUp = () => {
    // true renders Sign Up
    setSign(true)
  }

  const handleSignIn = () => {
    handleSidebar()
    signIn()
  }

  const handleSignUp = () => {
    handleSidebar()
    signUp()
  }


  return (
    <div className={`sidebar ${sidebar ? 'open' : ''}`}>
      <Cross />
      <nav>
        <ul>
          <li><Link to="/" onClick={handleSidebar}>Home</Link></li>
          <li><Link to="/explore" onClick={handleSidebar}>Explore</Link></li>
          <li><Link to="/about" onClick={handleSidebar}>About</Link></li>
          <li><Link to="/pricing" onClick={handleSidebar}>Pricing</Link></li>
          <li><Link to="/signin" onClick={handleSignIn}>Sign In</Link></li>
          <li><Link to="/signin" onClick={handleSignUp}>Sign Up</Link></li>
        </ul>
      </nav>
    </div>
  )
}
export default Sidebar