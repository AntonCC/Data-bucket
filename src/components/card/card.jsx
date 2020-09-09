import React from 'react'
import './card.scss'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Card = ({ title, subtitle, body, icon, accentColor }) => {
  const { ref, inView } = useInView({
    threshold: .4
  })

  return (
    <motion.div className="card"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={ inView ? { opacity: 1 } : ''}
    >
      <div className={`icon ${accentColor}`}>
        { icon }
      </div>
      <h3 className={`${accentColor}`}>{ title }</h3>
      <h5>{ subtitle }</h5>
      <p>{ body }</p>
    </motion.div>
  )
}
export default Card