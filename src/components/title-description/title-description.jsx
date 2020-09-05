import React from 'react'
import './title-description.scss'

const TitleDescription = ({ title, body, color }) => {
  return (
    <div className="title-description">
      <div className="container">
        <h2 style={{ color: color }}>{ title }</h2>
        <p>{ body }</p>
      </div>
    </div>
  )
}
export default TitleDescription