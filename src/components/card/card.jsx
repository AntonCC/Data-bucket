import React from 'react'
import './card.scss'

const Card = ({ title, subtitle, body, icon, accentColor }) => {

  return (
    <div className="card" >
      <div className={`icon ${accentColor}`}>
        { icon }
      </div>
      <h3 className={`${accentColor}`}>{ title }</h3>
      <h5>{ subtitle }</h5>
      <p>{ body }</p>
    </div>
  )
}
export default Card