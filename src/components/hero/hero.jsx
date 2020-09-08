import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'
import Button from '../../components/button/button'

const Hero = ({ title, subtitle, buttonText, image, video, extend, initialLoad}) => {
  console.log("From hero", initialLoad)
  return (
    <div className={`hero ${extend ? 'extend' : ''}`}>
      <div className="container">
        <motion.div className="side-a" 
          initial={ initialLoad ? { opacity: 0, y: -25} : ''} 
          animate={ initialLoad ? { opacity: 1, y: 0 } : ''} 
          transition={{ delay: .25}}
        >
          <h1>{ title }</h1>
          <h2>{ subtitle }</h2>
          {
            buttonText
              ? <Button buttonStyle="btn-gradient">{ buttonText }</Button>
              : ''
          }       
        </motion.div>
        <motion.div className="side-b"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {
            image
              ? <img src={ image } />
              : <video src={ video } autoPlay loop muted/>
          }
        </motion.div>
      </div>
    </div>
  )
}
export default Hero