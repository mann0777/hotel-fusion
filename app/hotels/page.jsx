'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header3 from '../components/Header3';
import Hotel from '../components/Hotel';
import LoadingSpinner from '../LoadingSpinner';
import Header1 from '@/components/Header1';


async function fetchHotels(query) {
  const res = await fetch(`/api/example/hotels?city=${query}`);

  if (!res.ok) {
    throw new Error('Failed to fetch hotels');
  }

  const { data } = await res.json();
  return data;
}

const Hotels = () => {
  const searchParams = useSearchParams();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = searchParams.get('city') || '';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (query) {
          const data = await fetchHotels(query);
          setHotels(data);
        } else {
          setHotels([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
    <Header1/>
      <Header3 />
      <div className="m-5">
        {loading && <LoadingSpinner />}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          <>
            {hotels && hotels.length > 0 ? (
              hotels.map((hotel) => (
                <Hotel
                  key={hotel._id}
                  id={hotel._id}
                  name={hotel.name}
                  description={hotel.description}
                  price={hotel.price}
                  facilities={hotel.facilities.map(f => ({...f, img: f.img.trim()}))}
                  imageUrls={[hotel.banner, ...hotel.gallery]}
                />
              ))
            ) : (
              <p>No hotels found for {query}.</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Hotels;
