"use client"
import { useEffect, useState, useCallback } from "react"
import axios from 'axios';
import LoadingSpinner from "@/LoadingSpinner";
import debounce from 'lodash/debounce'; 

const Filters = ({ onFilterChange, initialHotels }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [priceRange, setPriceRange] = useState(2000);

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async() => {
    try {
      setLoading(true);
      const response = await axios.get("/api/example/facilities");
      if(response.data?.facilities){
        setList(response.data.facilities);
      }
    } catch (error) {
      console.error("Error fetching facilities:", error);
      setError("Failed to load facilities");
    } finally {
      setLoading(false);
    }
  }

  const debouncedFilterHotels = useCallback(
    debounce(async (facilities, price) => {
      try {
        const response = await axios.post('/api/example/facilities', {
          facilities: facilities,
          priceRange: [0, parseInt(price)]
        });
        onFilterChange(response.data.hotels);
      } catch (error) {
        console.error('Filter error', error);
        setError("Failed to filter hotels");
      }
    }, 300),
    [onFilterChange]
  );

  useEffect(() => {
    debouncedFilterHotels(selectedFacilities, priceRange);
  }, [selectedFacilities, priceRange, debouncedFilterHotels]);

  const handleFacilityChange = (facility) => {
    setSelectedFacilities(prev => 
      prev.includes(facility) 
        ? prev.filter(f => f !== facility) 
        : [...prev, facility]
    );
  };

  if (loading) return <div className="m-5"><LoadingSpinner/></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="border-2 border-red-500 rounded-md m-5 h-auto py-10 px-3">
      <label htmlFor="price" className="text-xl mr-3 font-bold">
        Price: ${priceRange}
      </label>
      <input 
        type="range" 
        name="price" 
        id="price" 
        min={100} 
        max={2000} 
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      />
      <div className="my-10">
        <h3 className="text-xl font-bold my-3">Filter by Facilities: </h3>
        {list.length > 0 ? (
          list.map((facility) => (
            <p key={facility} className="grid grid-cols-4 my-3">
              <label htmlFor={facility} className="col-span-2">{facility}</label>
              <input 
                type="checkbox" 
                name={facility} 
                id={facility} 
                className="w-5 h-5 ml-3"
                checked={selectedFacilities.includes(facility)}
                onChange={() => handleFacilityChange(facility)}
              />
            </p>
          ))
        ) : (
          <p>No facilities available</p>
        )}
      </div>
    </div>
  )
}

export default Filters
