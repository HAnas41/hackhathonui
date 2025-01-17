
import React from 'react'
import Card from '../Card/Card'
import { homeProduct } from '@/utils/Helper/helper'

function HomeSellerList() {
  return (
    <div className='flex justify-center gap-12 items-center flex-wrap pt-10'>
      {
        homeProduct.map((e) => {
            return(
                <Card key={e.id} clothlist={e}/>
            )
        })
      }
    </div>
  )
}

export default HomeSellerList