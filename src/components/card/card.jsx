import React from 'react'
import './card.scss'

const Card = ({ title, subtitle, body, icon }) => {
  return (
    <div className="card">
      <div className="icon">
        { icon }
      </div>
      <h3>{ title }</h3>
      <h5>{ subtitle }</h5>
      <p>{ body }</p>
    </div>
  )
}
export default Card