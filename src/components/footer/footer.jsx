import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Facebook } from '../../img/icons/facebook-square-brands.svg'
import { ReactComponent as Youtube } from '../../img/icons/youtube-square-brands.svg'
import { ReactComponent as Twitter } from '../../img/icons/twitter-square-brands.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="side-a">
          <div className="copyright-block">
            <p className="copyright">&copy; 2020 Anton Chetvertkov</p>
            <Link to='#'>Terms and Conditions</Link>
            <Link to='#'>Privacy Policy</Link>
          </div>
          <div className="logo">
            Data Bucket
          </div>
        </div>
        <div className="side-b">
          <Facebook />
          <Youtube />
          <Twitter />
        </div>
      </div>
    </div>
  )
}
export default Footer