'use client';
import { useState } from 'react';
import Link from 'next/link';

const Header3 = () => {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 py-8 md:py-12 lg:py-16">
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white text-center font-bold mb-6">
          Over 157,000 hotels and homes across 35 countries
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-6/12 h-12 sm:h-16 outline-none px-3 text-lg border-r-2 border-gray-400"
            value={city}
            onChange={handleInputChange}
          />
          <Link href={`/hotels?city=${city}`} passHref>
            <button
              type="submit"
              className="w-full sm:w-auto h-12 sm:h-16 px-6 py-2 bg-green-400 hover:bg-green-600 text-white text-lg transition-colors duration-300"
            >
              Search
            </button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            type="submit"
            className="w-full sm:w-auto h-12 sm:h-16 px-4 py-2 hover:bg-white hover:bg-opacity-20 text-white text-lg transition-colors duration-300 rounded"
          >
            Continue your search
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto h-12 sm:h-16 px-4 py-2 border-2 border-white text-white hover:bg-white hover:text-red-600 rounded transition-colors duration-300"
          >
            Homestay in India Hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
