import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hotel = ({ id, name, description, price, facilities, imageUrls }) => {
  // Calculate the height for the large image based on three small images
  const smallImageHeight = 100; // Adjust this value based on your design
  const largeImageHeight = smallImageHeight * 3; // Total height for the large image

  return (
    <div className="border-2 border-red-500 rounded-lg p-5 flex flex-col lg:flex-row mb-5">
      {/* Main image section */}
      <div className="flex-shrink-0">
        <Image
          src={imageUrls[0] || 'https://www.homestratosphere.com/wp-content/uploads/2014/05/shutterstock_30411274.jpg'}
          alt="hotel"
          width={400}
          height={largeImageHeight} // Set height to match three small images
          className="w-full h-[300px] object-cover rounded-lg transition-transform duration-300 hover:scale-105" // Hover effect
        />
      </div>

      {/* Smaller images section */}
      <div className="flex flex-col justify-between ml-4">
        {imageUrls.slice(1, 4).map((url, index) => ( // Show only three small images
          <div key={index} className="relative mb-2">
            <Image
              src={url}
              alt="hotel"
              width={100}
              height={smallImageHeight}
              className="w-full h-20 object-cover rounded-lg transition-transform duration-300 hover:scale-105" // Hover effect
            />
          </div>
        ))}
      </div>

      {/* Hotel details section */}
      <div className="lg:ml-5 mt-4 lg:mt-0 lg:w-1/2">
        <h2 className="font-bold text-xl line-clamp-1 mb-3">{name}</h2>
        <p className="text-justify mb-5 text-lg">{description}</p>
        <div className="mb-5">
          <span className="font-bold text-2xl">Facilities: </span>
          <div className="flex flex-wrap mt-2">
            {facilities.map((facility) => (
              <div key={facility._id} className="flex items-center mr-4 mb-2">
                <Image
                  src={facility.img.trim()}
                  alt={facility.name}
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span>{facility.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <button className="w-full sm:w-60 h-14 rounded-lg bg-blue-400 text-lg mb-2 sm:mb-0">
            Price: {price}
          </button>
          <Link href={`/hotels/${id}`} className="text-xl font-bold text-red-600 sm:ml-10 mt-2 sm:mt-0">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
