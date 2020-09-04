import React from 'react'
import './pricing-cards.scss'
import PricingCard from '../pricing-card/pricing-card'

const PricingCards = ({ pricingInfo }) => {
  return (
    <div className="pricing-cards">
      <div className="container">
        {
          pricingInfo.map(info => (
            <PricingCard {...info}/>
          ))
        }
      </div>
    </div>
  )
}
export default PricingCards