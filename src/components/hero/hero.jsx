import React from 'react'
import './hero.scss'
import Button from '../../components/button/button'

const Hero = ({ title, subtitle, buttonText, image, video, extend}) => {
  return (
    <div className={`hero ${extend ? 'extend' : ''}`}>
      <div className="container">
        <div className="side-a">
          <h1>{ title }</h1>
          <h2>{ subtitle }</h2>
          {
            buttonText
              ? <Button buttonStyle="btn-gradient">{ buttonText }</Button>
              : ''
          }       
        </div>
        <div className="side-b">
          {
            image
              ? <img src={ image } />
              : <video src={ video } autoPlay loop muted/>
          }
        </div>
      </div>
    </div>
  )
}
export default Hero