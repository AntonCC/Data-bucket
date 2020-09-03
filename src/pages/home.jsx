import React from 'react'
import Hero from '../components/hero/hero'
import Cards from '../components/cards/cards'
import { cardInfo } from './topCard'

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards cardInfo={cardInfo}/>
    </div>
  )
}
export default Home