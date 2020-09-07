import React from 'react'
import './sign-container.scss'
import { Link } from 'react-router-dom'


const SignContainer = () => {
  const addActive = () => {

  }

  const removeActive = () => {

  }
  
  return (
    <div className="sign-outer">
      <div className="custom-container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <Link href="#" class="social"><i class="fab fa-facebook-f"></i></Link>
              <Link href="#" class="social"><i class="fab fa-google-plus-g"></i></Link>
              <Link href="#" class="social"><i class="fab fa-linkedin-in"></i></Link>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <Link href="#" class="social"><i class="fab fa-facebook-f"></i></Link>
              <Link href="#" class="social"><i class="fab fa-google-plus-g"></i></Link>
              <Link href="#" class="social"><i class="fab fa-linkedin-in"></i></Link>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link href="#">Forgot your password?</Link>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={removeActive}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={addActive}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignContainer