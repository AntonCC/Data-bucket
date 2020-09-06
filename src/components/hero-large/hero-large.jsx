import React from 'react'
import './hero-large.scss'
import Button from '../button/button'

const HeroLarge = () => {
  return (
    <div className="hero-large">
      <div className="container">
        <h2>All features needed by professionals</h2>
        <p>Our online editing and storage platform has everything you need to create your best work.</p>
        <div className="btn-wrap">
          <Button buttonStyle="btn-gradient">Sign Up Now</Button>
        </div>
      </div>
    </div>
  )
}
export default HeroLarge