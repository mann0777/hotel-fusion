import React from 'react'
import Image from 'next/image'
import Block from './Block'

const Header1 = () => {
  return (
    <div className='flex justify-between border-b-2 border-gray-300 items-center h-24 px-5 py-5' >
        <Image 
            src={'/fusion-logo-.png'} 
            alt='logo' width={200} 
            height={200} 
            className='w-16 h-16'
        />
    <div className=' border-gray-300 h-full flex'>
       <Block title={'Become a memeber'} para={"Additional 10% off on stay "}/>
       <Block title={'Fusion for business'} para={"Trusted by 500 corporates"}/>
       <Block title={'List your property'} para={"Start earning in 30 minute"}/>
       <Block title={'111-111-1111'} para={"Call us to book now"}/>
    </div> 
    </div>
  )
}

export default Header1