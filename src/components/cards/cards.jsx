import React from 'react'
import './cards.scss'
import Card from '../card/card'

const Cards = ({ cardInfo, bgClass }) => {
  return (
    <div className={`cards ${ bgClass }`}>
      <div className="container" >
        {cardInfo.map(info => (
          <Card {...info}/>
        ))}
      </div>
    </div>
  )
}
export default Cards