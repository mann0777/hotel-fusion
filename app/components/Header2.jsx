'use client'
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const locations = [
        { name: 'Banglore' },
        { name: 'Delhi' },
        { name: 'Punjab' },
        { name: 'Goa' },
        { name: 'Kerala' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-gray-400">
            {/* Fancy toggle button for small screens */}
            <button 
                className="md:hidden w-full py-2 px-4 flex items-center justify-between text-black hover:text-white hover:bg-black transition-colors duration-300"
                onClick={toggleMenu}
            >
                <span>Explore Cities</span>
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    {locations.map((e, index) => (
                        <div 
                            key={index} 
                            className="px-4 py-2 border-t border-gray-500 
                            hover:bg-gray-600 hover:text-white 
                            transition-colors duration-300 cursor-pointer"
                        >
                            {e.name}
                        </div>
                    ))}
                </div>
            )}

            {/* Desktop menu */}
            <div className='hidden md:flex px-4 py-3 sm:px-6 lg:px-10 justify-between'>
                {locations.map((e, index) => (
                    <span 
                        key={index} 
                        className="mx-2 text-sm sm:text-base 
                        relative group cursor-pointer"
                    >
                        <span className="relative z-10">{e.name}</span>
                        <span 
                            className="absolute bottom-0 left-0 w-full h-0.5 
                            bg-black transform scale-x-0 
                            group-hover:scale-x-100 
                            transition-transform duration-300 
                            origin-left"
                        ></span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Header2;
