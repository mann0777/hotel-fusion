"use client";

import Header1 from '@/components/Header1';
import LoadingSpinner from '@/LoadingSpinner';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
const SingleHotel = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  let auth ; 
  if (typeof window !== "undefined"){
    auth = Cookies.get('user');2222
  }

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await fetch(`/api/example/hotels/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch hotel details');
        }
        const data = await response.json();
        setHotel(data);
      } catch (error) {
        console.error('Error fetching hotel details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchHotelDetails();
    }
  }, [id]);

  if (loading) {
    return <div><LoadingSpinner/></div>;
  }

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
  <>
    <Header1 />
    <div className='w-7/12 mx-auto my-10'>
      <Image 
        src={hotel.banner || "https://www.homestratosphere.com/wp-content/uploads/2014/05/shutterstock_30411274.jpg"}
        alt={hotel.name}
        width={2000}
        height={2000} 
        className='h-large-box w-full my-5'
      />
      <div className=''>
        <h3 className='text-3xl font-bold'>{hotel.name}</h3>
        <p className='text-xl my-5 text-justify'>{hotel.description}</p>
        <button className='w-60 h-14 rounded-lg bg-blue-400 text-lg'>
          Price: ${hotel.price}
        </button>
        <p className='text-3xl font-bold my-5'>Facilities:</p>
          <ul className='flex flex-wrap gap-4'>
            {hotel.facilities.map((facility, index) => (
              <li key={index} className="flex items-center">
                <Image 
                  src={facility.img.trim()}
                  alt={facility.name}
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span>{facility.name}</span>
              </li>
            ))}
          </ul>
        {
          auth ? (<button className='w-60 h-14 rounded-lg bg-red-400 my-5 text-lg'>
          Book Now
        </button>) : 
        (<span className='text-2xl'>
          Please <Link href={'/login'} className='text-blue-500'>Login</Link> to get Offers</span>)
        }
      </div>
    </div>
    </>
  );
};

export default SingleHotel;
0