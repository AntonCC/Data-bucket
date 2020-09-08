import React, { useState } from 'react'
import './accordion.scss'
import { motion } from 'framer-motion'
import { ReactComponent as Plus } from '../../img/icons/plus-solid.svg'
import { ReactComponent as Minus } from '../../img/icons/minus-solid.svg'

const Accordion = ({ title, body }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div className={`accordion ${active ? 'active' : ''}`}>
      <div className="item-wrap">
        <button className="item" onClick={handleClick}>{ title }</button>
        {
          active
            ? <Minus />
            : <Plus />
        }
      </div>
      <motion.div className="panel"  
        animate={active ? { height: 100 } : { height: 0 }}
        transition={{ duration: .15 }}
      >
        <p>{ body }.</p>
      </motion.div>
    </div>
  )
}
export default Accordion