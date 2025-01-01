'use client';

import { useState, useEffect, useMemo, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header3 from '../components/Header3';
import Hotel from '../components/Hotel';
import LoadingSpinner from '../LoadingSpinner';
import Header1 from '@/components/Header1';
import Filters from '@/components/Filters';

const Hotels = () => {
  const searchParams = useSearchParams();
  const [allHotels, setAllHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = searchParams.get('city') || '';

  const fetchHotels = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      if (query) {
        const res = await fetch(`/api/example/hotels?city=${encodeURIComponent(query)}`);
        if (!res.ok) throw new Error('Failed to fetch hotels');
        const { data } = await res.json();
        setAllHotels(data);
        setFilteredHotels(data);
      } else {
        setAllHotels([]);
        setFilteredHotels([]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchHotels();
  }, [fetchHotels]);

  const handleFilterChange = useCallback((hotels) => {
    setFilteredHotels(hotels);
  }, []);

  const hotelList = useMemo(() => 
    filteredHotels.map((hotel) => (
      <Hotel
        key={hotel._id}
        id={hotel._id}
        name={hotel.name}
        description={hotel.description}
        price={hotel.price}
        facilities={hotel.facilities.map(f => ({...f, img: f.img.trim()}))}
        imageUrls={[hotel.banner, ...hotel.gallery]}
      />
    )), 
    [filteredHotels]
  );

  return (
    <>
      <Header1 />
      <Header3 />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Filters 
            onFilterChange={handleFilterChange} 
            initialHotels={allHotels}
            city={query}
          />
        </div>
        <div className='col-span-9'>
          <div className="m-5">
            {/* Use Suspense here */}
            <Suspense fallback={<LoadingSpinner />}>
              {loading && <LoadingSpinner />}
              {error && <p className="text-red-500">{error}</p>}
              {!loading && !error && (
                <>
                  {filteredHotels.length > 0 ? (
                    hotelList
                  ) : (
                    <p>No hotels found for {query}.</p>
                  )}
                </>
              )}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
