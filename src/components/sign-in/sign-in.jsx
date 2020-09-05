import React from 'react'
import './sign-in.scss'
import Button from '../button/button'

const SignIn = () => {
  return (
    <div className="sign-in">
      <h3>I already have an account</h3>
      <p>Sign in with your email and password</p>
      <form>
        <input type="text" placeholder="Name"/>
        <input type="password" placeholder="Password"/>
        <Button className="form-btn">Sign In</Button>
      </form>
    </div>
  )
}
export default SignIn