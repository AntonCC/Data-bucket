import React from 'react'
import './hero-list-dark.scss'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Mac from '../../img/mac-purple.jpg'

const HeroListDark = () => {
  const { ref, inView } = useInView({
    threshold: .8
  })

  return (
    <div className="hero-list-dark" ref={ref}>
      <motion.div className="container"
        initial={{ opacity: 0 }}
        animate={ inView ? { opacity: 1 } : '' }
      >
        <div className="side-a">
          <h2>How to compress files with Data Bucket</h2>
          <div className="line-item">
            <div className="number">1</div>
            <p>Make a Data Bucket account.</p>
          </div>
          <div className="line-item">
            <div className="number">2</div>
            <p>Drag and drop your file into the Data Bucket browser client.</p>
          </div>
          <div className="line-item">
            <div className="number">3</div>
            <p>Select quality and desired output file type. Thats it!</p>
          </div>
        </div>
        <div className="side-b">
          <img src={Mac} alt="apple computer"/>
        </div>
      </motion.div>
    </div>
  )
}
export default HeroListDark