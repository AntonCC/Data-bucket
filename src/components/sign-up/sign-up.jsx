import React from 'react'
import './sign-up.scss'

const SignUp = () => {
  return (
    <div className="sign-up">
      <h3>I do not have an account</h3>
      <p>Sign up with your email and password</p>
      <form>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Confirm Password"/>
      </form>
    </div>
  )
}
export default SignUp