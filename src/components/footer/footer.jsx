import React from 'react'
import './footer.scss'
import { ReactComponent as Facebook } from '../../img/icons/facebook-square-brands.svg'
import { ReactComponent as Youtube } from '../../img/icons/youtube-square-brands.svg'
import { ReactComponent as Twitter } from '../../img/icons/twitter-square-brands.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="side-a">
          <div className="copyright-block">
            <p className="copyright">&copy; 2021 Anton Chetvertkov</p>
            <a className="blank-link">Terms and Conditions</a>
            <a className="blank-link">Privacy Policy</a>
          </div>
          <a className="logo" href='/'>
            Data Bucket
          </a>
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