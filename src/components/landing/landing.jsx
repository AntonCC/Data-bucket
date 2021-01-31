import React from 'react'
import './landing.scss'
import Button from '../button/button'

const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="text">
          <h1>Reduce the size of large files with Data Bucket's online compressor</h1>
          <h2>No downloads are necessary! Manage your files in the browser, and quickly share them.</h2>
          <Button buttonStyle="btn-gradient" link='/pricing'>Try Data Bucket</Button>
        </div>
      </div>
    </div>
  )
}
export default Landing