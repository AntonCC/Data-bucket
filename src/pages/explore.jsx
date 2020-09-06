import React from 'react'
import { bannerInfo } from './exploreInfo'
import HeroLarge from '../components/hero-large/hero-large'
import Jumbotron from '../components/jumbotron/jumbotron'
import Banner from '../components/banner/banner'

const Explore = () => {
  return (
    <div className="explore">
      <HeroLarge />
      <Jumbotron />
      {
        bannerInfo.map(info => (
          <Banner {...info} />
        ))
      }
    </div>
  )
}
export default Explore