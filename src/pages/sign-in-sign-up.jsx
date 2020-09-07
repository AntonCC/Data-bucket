import React, { useContext } from 'react'
import './sign-in-sign-up.scss'
import { SignContext } from '../contexts/signContext'
import SignIn from '../components/sign-in/sign-in'
import SignUp from '../components/sign-up/sign-up'

const SignInSignUp = () => {
  const [sign, setSign] = useContext(SignContext)

  return (
    <div className="sign-in-sign-up">
      {
        sign 
          ? <SignUp />
          : <SignIn />
      }
    </div>
  )
}
export default SignInSignUp