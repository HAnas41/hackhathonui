import React from 'react'
import AboutWorkContent from '../AboutWorkContent/AboutWorkContent'
import { poppins } from '@/utils/Helper/helper'
import AboutWorkImg from '../AboutWorkImage/AboutWorkImage'

function AboutWork() {
  return (
    <section className={`${poppins.className} flex justify-center`}>
      <AboutWorkContent/>
      <AboutWorkImg/>
    </section>
  )
}

export default AboutWork