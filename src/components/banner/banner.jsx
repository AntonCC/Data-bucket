import React, { useState } from 'react'
import './banner.scss'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Button from '../button/button'

const Banner = ({ title, body, buttonStyle, buttonText, image, switchSide }) => {
  const [initialLoad, setInitialLoad] = useState(true)

  const { ref, inView } = useInView({
    threshold: .6
  })
  return (
    <motion.div className="banner" 
      ref={ref}
      initial={{  opacity: 0 }}
      animate={ inView ? {  opacity: 1 } : ''}
      transition={{ duration: .75 }}
    >
      <div className={`container ${switchSide ? 'banner-switch': ''}`}>
        <div className="side-a">
          <img src={ image } />
        </div>
        <div className="side-b">
          <h2>{ title }</h2>
          <p>{ body }</p>
          {
            buttonText
              ? <Button buttonStyle={buttonStyle}>{ buttonText }</Button>
              : ''
          }
        </div>
      </div>
    </motion.div>
  )
}
export default Banner