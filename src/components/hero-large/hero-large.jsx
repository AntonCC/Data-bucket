import React, { useContext } from 'react'
import { SignContext } from '../../contexts/signContext'
import './hero-large.scss'
import Button from '../button/button'

const HeroLarge = ({ link }) => {
  const [sign, setSign] = useContext(SignContext)

  const signUp = () => {
    setSign(true)
  }

  return (
    <div className="hero-large">
      <div className="container">
        <h2>All features needed by professionals</h2>
        <p>Our online editing and storage platform has everything you need to create your best work.</p>
        <div className="click-wrap" onClick={signUp}>
          <Button buttonStyle="btn-gradient" link={link}>Sign Up Now</Button>
        </div>
      </div>
    </div>
  )
}
export default HeroLarge