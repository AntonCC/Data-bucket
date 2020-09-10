import React from 'react'
import './jumbotron.scss'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '../button/button'

const Jumbotron = ({ title, body, buttonText, extend, link }) => {
  const { ref, inView } = useInView({
    threshold: .4
  })

  return (
    <div className={`jumbotron ${ extend ? 'extend' : ''}`}>
      <motion.div className="container"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={ inView ? { opacity: 1 } : ''}
      >
        <h2>{ title }</h2>
        <p>{ body }</p>
        {
          buttonText
            ? <Button buttonStyle="btn-gradient" link={link}>{ buttonText }</Button>
            : ''
        }
      </motion.div>
    </div>
  )
}
export default Jumbotron