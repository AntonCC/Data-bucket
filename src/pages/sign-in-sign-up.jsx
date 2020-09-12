import React, { useContext } from 'react'
import './sign-in-sign-up.scss'
import { SignContext } from '../contexts/signContext'
import { motion, AnimatePresence } from 'framer-motion'
import SignIn from '../components/sign-in/sign-in'
import SignUp from '../components/sign-up/sign-up'

const SignInSignUp = () => {
  const [sign, setSign] = useContext(SignContext)

  return (
    <div className="sign-in-sign-up">
      {
        sign 
          ? (
            <AnimatePresence>
              {sign && (
                <motion.div className="framer-wrap"
                initial={{ opacity: 0, x: -200}}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'tween', stiffness: 100}}
                exit={{ opacity: 0 }}
              >
                <SignUp />
              </motion.div>
              )}
            </AnimatePresence>
          )
          : (
            <motion.div className="framer-wrap"
              initial={{ opacity: 0, x: -200}}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'tween', stiffness: 100}}
            >
              <SignIn />
            </motion.div>
          )
      }
    </div>
  )
}
export default SignInSignUp