import React, { useContext, useRef } from 'react'
import { SignContext } from '../../contexts/signContext'
import './sign-up.scss'
import { Link } from 'react-router-dom'
import Button from '../button/button'

const SignUp = () => {
  const [sign, setSign] = useContext(SignContext)
  const formRef = useRef(null)

  const signIn = () => {
    // false renders Sign In
    setSign(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    formRef.current.reset()
    alert('Thanks for signing up!')
  }

  return (
    <div className="sign-up">
      <div className="container">
        <div className="side-a">
          <h1>Create Account</h1>
          <div className="social-box">
            <div className="social-icon">
              <i class="fab fa-google-plus-g"></i>
            </div>
            <div className="social-icon">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div className="social-icon">
            <i class="fab fa-linkedin-in"></i>
            </div>
          </div>
          <span>or use your email to register</span>
          <form onSubmit={handleSubmit} ref={formRef}>
            <input type="text" placeholder="Name" required/>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required/>
            <input type="password" placeholder="Confirm Password" required/>
            <Link to="#">Forgot your password?</Link>
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="side-b">
          <h1>Already have an account?</h1>
          <p>Welcome back! Press sign in below and enter your info.</p>
          <div className="cta-wrap" onClick={signIn}>
            <Button buttonStyle="btn-outline-white">Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignUp