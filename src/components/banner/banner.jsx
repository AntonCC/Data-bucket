import React from 'react'
import './banner.scss'
import Button from '../button/button'

const Banner = ({ title, body, buttonStyle, buttonText, image, switchSide }) => {
  return (
    <div className="banner">
      <div className={`container ${switchSide ? 'banner-switch': ''}`}>
        <div className="side-a">
          <img src={ image } alt="smiling mac user"/>
        </div>
        <div className="side-b">
          <h2>{ title }</h2>
          <p>{ body }</p>
          <Button buttonStyle={buttonStyle}>{ buttonText }</Button>
        </div>
      </div>
    </div>
  )
}
export default Banner