import React from 'react'
import { heroInfo, jumboInfo } from './aboutInfo'
import Hero from '../components/hero/hero'
import Jumbotron from '../components/jumbotron/jumbotron'

const About = () => {
  return (
    <div className="about">
      <Hero {...heroInfo}/>
      <Jumbotron {...jumboInfo}/>
    </div>
  )
}
export default About