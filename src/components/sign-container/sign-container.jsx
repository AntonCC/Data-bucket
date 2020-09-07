import React, { useState, useEffect} from 'react'
import './sign-container.scss'
import SignIn from '../sign-in/sign-in'

const SignContainer = () => {
  return (
    <div className="sign-outer">
     <SignIn />
    </div>
  )
}
export default SignContainer