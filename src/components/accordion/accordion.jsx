import React, { useState } from 'react'
import './accordion.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { ReactComponent as Plus } from '../../img/icons/plus-solid.svg'
import { ReactComponent as Minus } from '../../img/icons/minus-solid.svg'

const variants = {
  open: {
    height: '100%',
    transition: {
      duration: .15
    } 
  },
  closed: {
    height: 0,
    transition: {
      duration: .15
    }
  }
}

const Accordion = ({ title, body }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div className={`accordion ${active ? 'active' : ''}`}>
      <div className="item-wrap">
        <button className="item" onClick={handleClick}>{ title }</button>
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Minus />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Plus />
              </motion.div>
            )}
        </AnimatePresence>
      </div>
        <motion.div className="panel"
          animate={active ? { transform: 'scaleY(1)' } : { transform: 'scaleY(0)' }}
          transition={{ duration: .15 }}
        >
          <p>{ body }.</p>
        </motion.div>

    </div>
  )
}
export default Accordion