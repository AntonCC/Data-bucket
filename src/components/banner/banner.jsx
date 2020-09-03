import React from 'react'
import './banner.scss'
import Button from '../button/button'

const Banner = ({ title, body, buttonStyle, buttonText}) => {
  return (
    <div className="banner">
      <div className="container">
        <div className="side-a">

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