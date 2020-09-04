import React from 'react'
import './pricing-cards.scss'
import PricingCard from '../pricing-card/pricing-card'

const PricingCards = () => {
  return (
    <div className="pricing-cards">
      <div className="container">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  )
}
export default PricingCards