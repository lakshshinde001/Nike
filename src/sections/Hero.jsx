import React, { useState } from 'react'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons/index'
import {shoes, statistics} from '../constants/index.js'
import {bigShoe1} from '../assets/images/index'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className=' w-full  flex flex-col xl:flex-row xl:pl-10 justify-center min-h-screen gap-10 max-container '
    >

      <div className='relative flex flex-col xl:w-2/5 justify-center items-start w-full pt-28 max-xl:padding-x'>
        <p className='text-xl font-montserrat text-coral-red '>Our Summer collection </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-semibold'>

          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'> Our New Arrival</span>
          <br/>
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-16 sm:max-w-sm'>
          Discover Stylist nike Arrivals, Quality Products and innovations for your active life
        </p>
        <Button
          label ="Shop Now"
          iconURL = {arrowRight}
        />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {
            statistics.map((stat) => (
              <div key={stat.label}> 
                <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className='relative flex flex-1 items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className='flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {
            shoes.map((shoe, index)=>(
              <div key={index}>
                <ShoeCard 
                  imageURL = {shoe}
                  changeBigShoeImage = {(shoe)=>{setBigShoeImg(shoe)}}
                  bigShoeImage = {bigShoeImg}
                />

              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Hero