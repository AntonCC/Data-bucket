import React from 'react'
import './jumbotron.scss'
import Button from '../button/button'

const Jumbotron = ({ title, body, buttonText, extend, link }) => {

  return (
    <div className={`jumbotron ${ extend ? 'extend' : ''}`}>
      <div className="container">
        <h2>{ title }</h2>
        <p>{ body }</p>
        {
          buttonText
            ? <Button buttonStyle="btn-gradient" link={link}>{ buttonText }</Button>
            : ''
        }
      </div>
    </div>
  )
}
export default Jumbotron