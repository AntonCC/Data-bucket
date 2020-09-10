import React, { useEffect } from 'react'
import './banner.scss'
import { useInView } from 'react-intersection-observer'
import useIntro from '../../hooks/useIntro'
import { motion } from 'framer-motion'
import Button from '../button/button'

const Banner = ({ title, body, buttonStyle, buttonText, image, switchSide, link }) => {
  const showAnimation = useIntro()

  const { ref, inView } = useInView({
    threshold: .8
  })

  return (
    <motion.div className="banner" 
      ref={ref}
      initial={ showAnimation ? {  opacity: 0 } : { opacity: 1 }}
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
              ? <Button buttonStyle={buttonStyle} link={link} justify="flex-start">{ buttonText }</Button>
              : ''
          }
        </div>
      </div>
    </motion.div>
  )
}
export default Banner