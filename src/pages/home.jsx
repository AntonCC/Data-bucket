import React from 'react'
import { heroInfo, cardInfo, cardInfo2, bannerInfo, jumboInfo } from './homeInfo'
import Hero from '../components/hero/hero'
import HeroListDark from '../components/hero-list-dark/hero-list-dark'
import Cards from '../components/cards/cards'
import Banner from '../components/banner/banner'
import Jumbotron from '../components/jumbotron/jumbotron'

const Home = () => {

  return (
    <div>
      <Hero {...heroInfo} />
      <Cards cardInfo={cardInfo} extend/>
      <HeroListDark />
      {
        bannerInfo.map(info => (
          <Banner {...info}/>
        ))
      }
      <Cards cardInfo={cardInfo2} bgClass="purple-svg"/>
      <Jumbotron {...jumboInfo}/>
    </div>
  )
}
export default Home