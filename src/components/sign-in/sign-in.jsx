import React, { useContext, useRef } from 'react'
import { SignContext } from '../../contexts/signContext'
import './sign-in.scss'
import { Link } from 'react-router-dom'
import  Button  from '../button/button'

const SignIn = () => {
  const [sign, setSign] = useContext(SignContext)
  const formRef = useRef(null)

  const signUp = () => {
    // true renders Sign Up
    setSign(true)
  }

  const handleSubmit = e => {
    e.preventDefault()
    formRef.current.reset()
    alert('Thanks for signing in.')
  }

  return (
    <div className="sign-in">
      <div className="container">
        <div className="side-a">
          <h1>Sign in</h1>
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
          <span>or use your account</span>
          <form onSubmit={handleSubmit} ref={formRef}>
            <input type="text" placeholder="Name" required/>
            <input type="password" placeholder="Password" required/>
            <Link to="#">Forgot your password?</Link>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="side-b">
          <h1>Hello there!</h1>
          <p>Need an account? Hit the sign up button below.</p>
          <div className="cta-wrap" onClick={signUp}>
            <Button buttonStyle="btn-outline-white">Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignIn