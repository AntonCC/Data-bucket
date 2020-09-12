import React from 'react'
import './pricing-cards.scss'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import PricingCard from '../pricing-card/pricing-card'

const PricingCards = ({ pricingInfo }) => {
  const { ref, inView } = useInView({
    threshold: .3
  })

  return (
    <motion.div className="pricing-cards"
      ref={ref}
      initial={{ opacity: 0, x: -300}}
      transition={{ type: 'tween', stiffness: 100 }}
      animate={ inView ? { opacity: 1, x: 0 } : ''}
    >
      <div className="container">
        {
          pricingInfo.map(info => (
            <PricingCard {...info}/>
          ))
        }
      </div>
    </motion.div>
  )
}
export default PricingCards