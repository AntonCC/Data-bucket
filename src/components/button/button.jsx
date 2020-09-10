import React from 'react'
import './button.scss'
import { Link } from 'react-router-dom'

const STYLES = ['btn-primary', 'btn-outline', 'btn-gradient', 'btn-gradient-purple']

const Button = ({ children, buttonStyle, justify, link }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  return (
    <div className="btn-wrap" style={{ justifyContent: justify }}>
      {
        link 
          ? (
            <Link to={link}>
              <div className={`button ${checkButtonStyle}`}>
                { children }
              </div>
            </Link>
          )
          : (
            <div className={`button ${checkButtonStyle}`}>
              { children }
            </div>
          )
      }
    </div>
  )
}
export default Button