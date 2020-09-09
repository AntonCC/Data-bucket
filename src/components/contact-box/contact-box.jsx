import React from 'react'
import './contact-box.scss'

const ContactBox = () => {
  return (
    <div className="contact-box">
      <div className="custom-container">
        <h3>Contact Us</h3>
        <p>Feel free to contact us if you have any questions or would like to leave some feedback.</p>
        <p>
          <b>Support Email</b>
          <a>support@databucket.com</a>
        </p>
        <p>
          <b>Media</b>
          <a>media@databucket.com</a>
        </p>
        <p>
          <b>Job Oppurtunities</b>
          <a>jobs@databucket.com</a>
        </p>
      </div>
    </div>
  )
}
export default ContactBox