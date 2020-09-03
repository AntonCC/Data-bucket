import React from 'react'
import './hero.scss'
import Waves from '../../img/waves.jpg'
import Button from '../../components/button/button'

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="side-a">
          <h1>Reduce the size of large files with Data Bucket's online compressor</h1>
          <h2>No downloads are necessary! Manage your files in the browser, and quickly share them.</h2>
          <Button buttonStyle="btn-gradient">Try Data Bucket</Button>
        </div>
        <div className="side-b">
          <img src={Waves} alt="abstract waves"/>
        </div>
      </div>
    </div>
  )
}
export default Hero