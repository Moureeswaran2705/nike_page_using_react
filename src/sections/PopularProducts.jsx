import React from 'react'
import {products} from '../constants'
import PopularProductCard from '../components/PopularProductCard'
const PopularProducts = () => {
  return (
    <section id='products'
    className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
      <h2 className='text-4xl font-palanquin
      font-bold'>Top <span className='text-coral-red'>Sales</span> </h2>
      <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
      How can you separate your game when it's winning time? 
      Start by lacing up in the G.T. Cut 3. 
      Designed to help you create space for stepback jumpers and backdoor cuts,
      its sticky multi-court traction helps you stop in an instant and shift gears at will.
      </p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3
      sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product)=>(
          <PopularProductCard key=
          {product.name} {...product}/> 
        ))}
      </div>
    </section>
  )
}

export default PopularProducts