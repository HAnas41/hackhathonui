import React from 'react'
import TeamHeroImg from '../TeamHeroImg/TeamHeroImg'
import { poppins } from '@/utils/Helper/helper'
import TeamHeroCont from '../TeamHeroCont/TeamHeroCont'

function TeamHero() {
  return (
    <section className={`${poppins.className} py-10 flex flex-col items-center`}>
       <TeamHeroCont />
      <TeamHeroImg/>
    </section>
  )
}

export default TeamHero