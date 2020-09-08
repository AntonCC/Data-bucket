import React from 'react'
import './jumbotron.scss'

const Jumbotron = ({ title, body }) => {
  return (
    <div className="jumbotron">
      <div className="container">
        <h2>{ title }</h2>
        <p>{ body }</p>
      </div>
    </div>
  )
}
export default Jumbotron