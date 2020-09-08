import React, { useState, useEffect } from 'react'
import { heroInfo, cardInfo, cardInfo2, bannerInfo } from './homeInfo'
import Hero from '../components/hero/hero'
import HeroListDark from '../components/hero-list-dark/hero-list-dark'
import Cards from '../components/cards/cards'
import Banner from '../components/banner/banner'

const Home = () => {
  const [initialLoad, setInitialLoad] = useState(true)

  useEffect(() => {
    if(window.sessionStorage.getItem('homeInitial') === null) {
      setInitialLoad(true)
      window.sessionStorage.setItem('homeInitial', 1)
    } else {
      setInitialLoad(false)
    }
  })

  return (
    <div>
      <Hero {...heroInfo} initialLoad={initialLoad}/>
      <Cards cardInfo={cardInfo}/>
      <HeroListDark />
      {
        bannerInfo.map(info => (
          <Banner {...info}/>
        ))
      }
      <Cards cardInfo={cardInfo2} bgClass="purple-svg"/>
    </div>
  )
}
export default Home