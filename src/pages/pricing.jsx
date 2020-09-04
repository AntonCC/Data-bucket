import React from 'react'
import { pricingInfo } from './pricingInfo'
import TitleDescription from '../components/title-description/title-description'
import PricingCards from '../components/pricing-cards/pricing-cards'

const Pricing = () => {
  return (
    <div>
      <TitleDescription />
      <PricingCards pricingInfo={pricingInfo} />
    </div>
  )
}
export default Pricing