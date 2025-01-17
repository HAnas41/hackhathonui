
import React from 'react'
import OtherBar from '../OtherBar/OtherBar'

import OtherProdDetail from '../OtherProdDetail/OtherProdDetail'
import { poppins } from '@/utils/Helper/helper'

function OtherProduct() {
  return (
    <section className={`${poppins.className}`}>
      <OtherBar/>
      <OtherProdDetail/>
    </section>
  )
}

export default OtherProduct
