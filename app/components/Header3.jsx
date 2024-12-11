'use client';
import { useState } from 'react';
import Link from 'next/link';

const Header3 = () => {
  // State to hold the search query
  const [city, setCity] = useState('');

  // Handle input change to update the search query
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
      <div className="mx-10 p-5">
        <h2 className="text-4xl text-white text-center font-bold">
          Over 157,000 hotels and homes across 35 countries
        </h2>
        <div className="grid grid-cols-5 my-5 mx-20">
          <input
            type="text"
            placeholder="Search..."
            className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2"
            value={city} // bind input value to the state
            onChange={handleInputChange} // update state on change
          />
          <input
            type="text"
            placeholder="Search..."
            className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />
          <input
            type="text"
            placeholder="Search..."
            className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />
          {/* Dynamically change the link based on user input */}
          <Link href={`/hotels?city=${city}`} passHref>
            <button
              type="submit"
              className="h-16 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white"
            >
              Search
            </button>
          </Link>
        </div>

        <div className="flex mx-20 my-5">
          <button
            type="submit"
            className="h-16 px-3 py-2 hover:cursor-pointer text-white text-xl mr-5"
          >
            Continue your search
          </button>
          <button
            type="submit"
            className="h-16 px-3 py-2 hover:cursor-pointer border-2 border-white text-white mr-5 hover:bg-gray-500 rounded-xl"
          >
            Homestay in India Hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
