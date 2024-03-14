import React from 'react'
import useStockCall from '../hooks/useStockCall'
import { useEffect } from 'react'

const Brands = () => {
  const {getBrands} = useStockCall()

  useEffect(()=>{
    getBrands()
  },[])
  return (
    <div>Brands</div>
  )
}

export default Brands