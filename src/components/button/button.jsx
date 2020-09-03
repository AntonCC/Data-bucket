import React from 'react'
import './button.scss'

const STYLES = ['btn-primary', 'btn-outline', 'btn-gradient']

const Button = ({ children, buttonStyle }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  return (
    <div className={`button ${checkButtonStyle}`}>
      { children }
    </div>
  )
}
export default Button