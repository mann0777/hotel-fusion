'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Block from './Block';
import Link from 'next/link';
import Cookies from 'js-cookie';

const Header1 = () => {
  // Initialize auth state
  const [auth, setAuth] = useState(null);

  // Use effect to check the user cookie when the component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userCookie = Cookies.get('user');
      setAuth(userCookie); // Update the state based on the cookie
    }
  }, []); // Empty dependency array makes this run only once after the initial render

  // Handle logout function
  const handleLogout = () => {
    Cookies.remove('user'); // Remove the user cookie
    setAuth(null); // Update state to reflect logout (forces re-render)
  };

  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-24 px-5 py-5">
      <Image 
        src={'/fusion-logo-.png'} 
        alt="logo" 
        width={200} 
        height={200} 
        className="w-16 h-16"
      />
      <div className="border-gray-300 h-full flex">
        <Block title={'Become a member'} para={'Additional 10% off on stay'} />
        <Block title={'Fusion for business'} para={'Trusted by 500 corporates'} />
        <Block title={'List your property'} para={'Start earning in 30 minutes'} />
        <Block title={'111-111-1111'} para={'Call us to book now'} />

        <div className="flex items-center px-3">
          <Image 
            src={'globe.svg'} 
            alt="demo" 
            width={200} 
            height={200} 
            className="w-10 h-10 rounded-full mr-5"
          />

          {auth ? (
            <h3 className="font-bold cursor-pointer" onClick={handleLogout}>
              Logout
            </h3>
          ) : (
            <Link href="/login">
                <h3 className="font-bold">Login / Signup</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
