"use client";

import Image  from 'next/image';

//import { useParams } from 'next/navigation';
import React from 'react'

export const SignleHotel = () => {
  //const {id} = useParams();

  return (
    <div className='w-7/12 mx-auto my-10' >
      <Image 
      src={"https://www.homestratosphere.com/wp-content/uploads/2014/05/shutterstock_30411274.jpg"}
      alt='hotel'
      width={2000}
      height={2000} 
      className='h-large-box w-full my-5'
      />
      <div className=''>
        <h3 className='text-3xl font-bold'>
        Hirdesh "Honey" Singh (born 15 March 1983), known professionally as Yo Yo Honey Singh, is a music producer, singer and actor. 
        He commenced his career as a hip-hop music producer in 2003,
        </h3>
        <p className='text-xl my-5 text-justify'>
        Honey Singh was born on March 15, 1983 to a Sikh family in Hoshiarpur, Punjab. 
        He studied at the Guru Nanak Public School in New Delhi. 
        Given his interest in music, Singh traveled to the United Kingdom to study at the Trinity College Of Music. 
        After graduating, he moved to Delhi in pursuit of better career opportunities. 
        He began his career as a recording artist and a Bhangra music producer. His first claim to fame came when he received the ETC award for Best Sound for his song, 
        Glassi in 2006.
        </p>
        <button className='w-60 h-14 rounded-lg bg-blue-400 text-lg'>
              Price :4500
              </button>
              <p className='text-3xl font-bold my-5'>
                Facilities :
              </p>
              <ul className='flex text-xl justify-between'>
                <li>Swimming Pool</li>
                <li>Dogs</li>
                <li>Garden</li>
                <li>Loundry</li>
                <li>Cricket</li>
              </ul>
              <button className='w-60 h-14 rounded-lg bg-red-400 my-5 text-lg'>
              Book Now
              </button>
      </div>
    </div>
  )
}

export default SignleHotel
