import React from 'react'
import { cardInfo, bannerInfo } from './homeInfo'
import Hero from '../components/hero/hero'
import HeroListDark from '../components/hero-list-dark/hero-list-dark'
import Cards from '../components/cards/cards'
import Banner from '../components/banner/banner'

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards cardInfo={cardInfo}/>
      <HeroListDark />
      {
        bannerInfo.map(info => (
          <Banner {...info}/>
        ))
      }
    </div>
  )
}
export default Home