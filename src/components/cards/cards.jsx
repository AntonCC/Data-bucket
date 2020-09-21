import React from 'react'
import './cards.scss'
import Card from '../card/card'

const Cards = ({ cardInfo, bgClass, extend }) => {
  return (
    <div className={`cards ${ bgClass ? bgClass : '' } ${ extend ? 'extend' : '' }`}>
      <div className="container" >
        <div className="card-wrap">
          {cardInfo.map(info => (
            <Card {...info}/>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Cards