import React from 'react'
import './pricing-card.scss'
import { ReactComponent as Check } from '../../img/icons/check-solid.svg'
import Button from '../button/button'

const PricingCard = ({ tier, subtitle, price, features, active, btnAltColor }) => {
  return (
    <div className={`pricing-card ${active}`}>
      <div className="top">
        <h3>{ tier }</h3>
        <p>{ subtitle }</p>
        <ul>
          {
            features.map(feature => (
              <li><Check />{ feature }</li>
            ))
          }
        </ul>
      </div>
      <div className="bottom">
        <div className="price">{ price }</div>
        <Button buttonStyle='btn-gradient'>Purchase</Button>
      </div>
    </div>
  )
}
export default PricingCard