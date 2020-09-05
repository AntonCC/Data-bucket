import React from 'react'
import './sign-container.scss'
import SignIn from '../sign-in/sign-in'
import SignUp from '../sign-up/sign-up'

const SignContainer = () => {
  return (
    <div className="sign-container">
      <div className="container">
        <SignIn />
        <SignUp />
      </div>
    </div>
  )
}
export default SignContainer