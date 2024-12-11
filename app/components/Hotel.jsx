import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Hotel = ({ id, name, description, price, facilities, imageUrls }) => {
  return (
    <div className="border-2 border-red-500 rounded-lg h-auto w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={imageUrls[0] || 'https://www.homestratosphere.com/wp-content/uploads/2014/05/shutterstock_30411274.jpg'}
          alt="hotel"
          width={200}
          height={200}
          className="w-96 h-60 mr-5"
        />
        <div className="grid grid-rows-3">
          {imageUrls.slice(1).map((url, index) => (
            <Image
              key={index}
              src={url}
              alt="hotel"
              width={200}
              height={200}
              className="w-28"
            />
          ))}
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-xl line-clamp-1">{name}</h2>
          <p className="text-justify my-5 text-lg">{description}</p>
          <div className="my-5">
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
          <div className="flex items-center">
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
              Price: {price}
            </button>
            <Link href={`/hotels/${id}`} className="text-xl font-bold text-red-600 ml-10">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
