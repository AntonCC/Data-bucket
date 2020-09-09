import HeroVid from '../video/hero-vid.mp4'
import Goals from '../img/goals.jpg'
import Values from '../img/values.jpg'
import Banner from '../components/banner/banner'

export const heroInfo = {
  title: 'We make editing easy',
  subtitle: 'Forget all the hassles of editing images and video. Our editor makes things simple and fun, so your creativity can run wild.',
  video: HeroVid,
  extend: true
}

export const jumboInfo = {
  title: 'We empower your inner creative',
  body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, autem eaque numquam molestias accusantium natus hic quidem totam laborum, voluptas reprehenderit exercitationem iure! Assumenda, minima. Sit obcaecati optio quidem quod eaque cum impedit et.',
  extend: true
}

export const bannerInfo = [
  {
    title: 'Our Values',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, odit. Quisquam recusandae vel adipisci corrupti natus distinctio obcaecati enim magni voluptatum? Atque veniam rerum qui illo minima libero ad deserunt.',
    image: Goals
  },
  {
    title: 'Our Goals',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, odit. Quisquam recusandae vel adipisci corrupti natus distinctio obcaecati enim magni voluptatum? Atque veniam rerum qui illo minima libero ad deserunt.',
    image: Values,
    switchSide: true
  },
]

export const accordionInfo = [
  {
    title: 'What is Data Bucket?',
    body: 'Test Text'
  },
  {
    title: 'What problems do we aim to solve?',
    body: 'Test Text'
  },
  {
    title: 'Do we prioritize environmental friendliness?',
    body: 'Test Text'
  },
  {
    title: 'Does Data Bucket work on Mac and Linux?',
    body: 'Test Text'
  },
  {
    title: 'Can I use Data Bucket outside the browser?',
    body: 'Test Text'
  },
]
