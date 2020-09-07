import React from 'react'
import './button.scss'

const STYLES = ['btn-primary', 'btn-outline', 'btn-gradient', 'btn-gradient-purple']

const Button = ({ children, buttonStyle, justify }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  return (
    <div className={`button ${checkButtonStyle}`} style={{ justifyContent: justify }}>
      { children }
    </div>
  )
}
export default Button