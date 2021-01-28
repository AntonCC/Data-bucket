import React, { useState, useEffect } from 'react'
import './hero.scss'
import { motion } from 'framer-motion'
import Button from '../../components/button/button'

const Hero = ({ title, subtitle, buttonText, image, video, extend, link }) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', handleHeightChange)

    return () => {
      window.removeEventListener('resize', handleHeightChange)
    }
  }, [])

  const handleHeightChange = () => {
    setWindowHeight(window.innerHeight)
  }

  return (
    <div className={`hero ${extend ? 'extend' : ''}`} style={{ height: `calc(${windowHeight})px` }}>
      <div className="container">
        <motion.div className="side-a" 
          initial={ { opacity: 0, y: -25} } 
          animate={ { opacity: 1, y: 0 } } 
          transition={{ delay: .25}}
        >
          <h1>{ title }</h1>
          <h2>{ subtitle }</h2>
          {
            buttonText
              ? <Button buttonStyle="btn-gradient" link={link}>{ buttonText }</Button>
              : ''
          }       
        </motion.div>
        <motion.div className="side-b"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {
            image
              ? <img src={ image } alt="hero"/>
              : <video src={ video } autoPlay loop muted/>
          }
        </motion.div>
      </div>
    </div>
  )
}
export default Hero