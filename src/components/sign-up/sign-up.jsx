import React from 'react'
import './sign-up.scss'
import { Link } from 'react-router-dom'
import Button from '../button/button'

const SignUp = () => {
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
          <form>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password"/>
          </form>
          <Link to="#">Forgot your password?</Link>
          <div className="cta-wrap">
            <Button buttonStyle="btn-gradient">Sign in</Button>
          </div>
        </div>
        <div className="side-b">
          <h1>Already have an account?</h1>
          <p>Welcome back! Press sign in below and enter your info.</p>
          <div className="cta-wrap">
            <Button buttonStyle="btn-outline">Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignUp