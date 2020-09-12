import React from 'react'
import './pricing-card.scss'
import { motion } from 'framer-motion'
import { ReactComponent as Check } from '../../img/icons/check-solid.svg'
import Button from '../button/button'

const PricingCard = ({ tier, subtitle, price, features, active, btnAltColor }) => {
  return (
    <motion.div className={`pricing-card ${active}`}
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'tween', stiffness: 100 }}
    >
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
    </motion.div>
  )
}
export default PricingCard