import React, { useEffect } from 'react'
import { heroInfo, jumboInfo, bannerInfo, accordionInfo } from './aboutInfo'
import Hero from '../components/hero/hero'
import Jumbotron from '../components/jumbotron/jumbotron'
import Banner from '../components/banner/banner'
import AccordionContainer from '../components/accordion-container/accordion-container'
import ContactBox from '../components/contact-box/contact-box'

const About = () => {
  return (
    <div className="about">
      <Hero {...heroInfo}/>
      <Jumbotron {...jumboInfo}/>
      <Banner {...bannerInfo}/>
      <AccordionContainer accordionInfo={accordionInfo}/>
      <ContactBox />
    </div>
  )
}
export default About