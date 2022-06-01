import React from 'react'
import HeroImage from '../../assets/hero.webp'
function Home() {
  return (
    <div className='home' id='home'>
      <div className="hero_image">
        <img src={ HeroImage } alt="" />
      </div>
        <div className="text_wrapper">
            <h1>portfolio</h1>
            <span className='cursive'>frontend web developer</span>
        </div>
    </div>
  )
}

export default Home