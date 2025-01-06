'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Block from './Block';
import Link from 'next/link';
import Cookies from 'js-cookie';

const Header1 = () => {
  const [auth, setAuth] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userCookie = Cookies.get('user');
      setAuth(userCookie);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('user');
    setAuth(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b-2 border-gray-300">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Image 
            src={'/fusion-logo-.png'} 
            alt="logo" 
            width={64} 
            height={64} 
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
          
          {/* Mobile menu button */}
          <button className="lg:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center space-x-4">
            <Block title={'Become a member'} para={'Additional 10% off on stay'} />
            <Block title={'Fusion for business'} para={'Trusted by 500 corporates'} />
            <Block title={'List your property'} para={'Start earning in 30 minutes'} />
            <Block title={'111-111-1111'} para={'Call us to book now'} />
          </nav>

          {/* Login/Signup for desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Image 
              src={'/globe.svg'} 
              alt="demo" 
              width={32} 
              height={32} 
              className="w-8 h-8 rounded-full"
            />
            {auth ? (
              <button onClick={handleLogout} className="font-bold text-sm">Logout</button>
            ) : (
              <Link href="/login" className="font-bold text-sm">Login / Signup</Link>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <Block title={'Become a member'} para={'Additional 10% off on stay'} />
            <Block title={'Fusion for business'} para={'Trusted by 500 corporates'} />
            <Block title={'List your property'} para={'Start earning in 30 minutes'} />
            <Block title={'111-111-1111'} para={'Call us to book now'} />
            <div className="flex items-center justify-between pt-4 border-t border-gray-300">
              <Image 
                src={'/globe.svg'} 
                alt="demo" 
                width={32} 
                height={32} 
                className="w-8 h-8 rounded-full"
              />
              {auth ? (
                <button onClick={handleLogout} className="font-bold text-sm">Logout</button>
              ) : (
                <Link href="/login" className="font-bold text-sm">Login / Signup</Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header1;
