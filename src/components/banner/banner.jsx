import React from 'react'
import './banner.scss'
import Button from '../button/button'

const Banner = ({ title, body, buttonStyle, buttonText, image, switchSide, link }) => {

  return (
    <div className="banner" >
      <div className={`container ${switchSide ? 'banner-switch': ''}`}>
        <div className="side-a">
          <img src={ image } alt="banner"/>
        </div>
        <div className="side-b">
          <h2>{ title }</h2>
          <p>{ body }</p>
          {
            buttonText
              ? <Button buttonStyle={buttonStyle} link={link} justify="flex-start">{ buttonText }</Button>
              : ''
          }
        </div>
      </div>
    </div>
  )
}
export default Banner