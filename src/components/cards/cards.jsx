import React, { useEffect } from 'react'
import './cards.scss'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Card from '../card/card'

const Cards = ({ cardInfo, bgClass }) => {
  const { ref, inView, entry } = useInView({
    threshold: .2
  })

  return (
    <div className={`cards ${bgClass}`} ref={ref}>
      <motion.div className="container" initial={{ opacity: 0 }} animate={ inView ? { opacity: 1 } : ''} transition={{ delay: .5}}>
        {cardInfo.map(info => (
          <Card {...info}/>
        ))}
      </motion.div>
    </div>
  )
}
export default Cards