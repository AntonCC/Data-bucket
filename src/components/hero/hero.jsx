import React from 'react'
import './hero.scss'
import Button from '../../components/button/button'

const Hero = ({ title, subtitle, buttonText, image}) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="side-a">
          <h1>{ title }</h1>
          <h2>{ subtitle }</h2>
          <Button buttonStyle="btn-gradient">{ buttonText }</Button>
        </div>
        <div className="side-b">
          <img src={ image } alt="abstract waves"/>
        </div>
      </div>
    </div>
  )
}
export default Hero