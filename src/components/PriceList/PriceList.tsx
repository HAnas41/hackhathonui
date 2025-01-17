

import React from 'react'
import PriceCard from '../PriceCard/PriceCard';
import { priceList } from '@/utils/Helper/helper';

function PriceList() {
  return (
    <div className='flex justify-center item-center gap-4 pb-10 flex-wrap'>
      {priceList.map((e) => {
        return(
          <PriceCard key={e.id} priceData={e}/>
        );
      })}
      
    </div>
  )
}

export default PriceList
