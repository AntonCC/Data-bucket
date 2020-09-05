import React from 'react'
import { pricingInfo, utilityInfo } from './pricingInfo'
import TitleDescription from '../components/title-description/title-description'
import PricingCards from '../components/pricing-cards/pricing-cards'

const titlePlans = {
  title: 'Pricing Plans',
  body: 'The plans below are designed to cater to most use cases. For custom plans feel free to contact us.',
  color: '#665dc3'
}

const utilityPlans = {
  title: 'Utility Plans',
  body: 'Extra utility for when you need it.',
  color: '#665dc3'
}

const Pricing = () => {
  return (
    <div>
      <TitleDescription {...titlePlans}/>
      <PricingCards pricingInfo={pricingInfo} />
      <TitleDescription {...utilityPlans}/>
      <PricingCards pricingInfo={utilityInfo} />
    </div>
  )
}
export default Pricing