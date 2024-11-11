import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hotel = ({id}) => {
  return (
    <div className='border-2 border-red-500 rounded-lg h-75 w-full mb-5 p-5'>
        <div className='flex'>
            <Image 
            src={"https://www.homestratosphere.com/wp-content/uploads/2014/05/shutterstock_30411274.jpg"} 
            alt='hotel' 
            width={200} 
            height={200}
            className='w-96 h-60 mr-5'/>

    <div className="grid grid-rows-3">
        <Image src={"https://www.homestratosphere.com/wp-content/uploads/2014/05/shutterstock_30411274.jpg"} 
            alt='hotel' 
            width={200} 
            height={200}
            className='w-28'/>
            <Image src={"https://www.homestratosphere.com/wp-content/uploads/2014/05/shutterstock_30411274.jpg"} 
            alt='hotel' 
            width={200} 
            height={200}
            className='w-28'/>
            <Image src={"https://www.homestratosphere.com/wp-content/uploads/2014/05/shutterstock_30411274.jpg"} 
            alt='hotel' 
            width={200} 
            height={200}
            className='w-28'/>
            <Image src={"https://www.homestratosphere.com/wp-content/uploads/2014/05/shutterstock_30411274.jpg"} 
            alt='hotel' 
            width={200} 
            height={200}
            className='w-28'/>
        </div>
        <div className='ml-20'>
            <h2 className='font-bold text-xl line-clamp-1'>Hello hello welcom welcome </h2>
            <p className='text-justify my-5 text-lg'>
            Let’s make it easier and help you have the best representation for your hotel, hostel, motel or vacation rental on the word wide web. These Luxury hotel description examples will be a good help and an idea to craft your own, or to copy them and paste in the about me box with little editing.
            </p>
            <p className='text-2xl my-5'>
              <span className='font-bold'>Facilities : </span>
              <span>Free wifi , Pet care , Swimming Pool , Beaches , Ressort</span>
            </p>
            <div className='flex items-center'>
            <button className='w-60 h-14 rounded-lg bg-blue-400 text-lg'>
              Price :4500
              </button>
              <Link href={`/hotels/${id}`} className='text-xl font-bold text-red-600 ml-10'>See Details</Link>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Hotel