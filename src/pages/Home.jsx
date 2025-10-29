import React from 'react'
import HeroSec from './HeroSec'
import Contact from './Contact'
import Course from './Course'
import About from './About'

function Home() {
  return (
    <div>
      <HeroSec />
      <Course /> 
      <About />
      <Contact />
    </div>
  )
}

export default Home