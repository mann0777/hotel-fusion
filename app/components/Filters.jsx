'use client';
import { useEffect, useState } from "react";
import axios from 'axios';
import LoadingSpinner from "@/LoadingSpinner";

const Filters = ({ onFilterChange, initialHotels, city }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  
  // Current filter state
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [priceRange, setPriceRange] = useState(2000);
  
  // Temporary filter state
  const [tempSelectedFacilities, setTempSelectedFacilities] = useState([]);
  const [tempPriceRange, setTempPriceRange] = useState(2000);

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/example/facilities");
      if (response.data?.facilities) {
        setList(response.data.facilities);
      }
    } catch (error) {
      console.error("Error fetching facilities:", error);
      setError("Failed to load facilities");
    } finally {
      setLoading(false);
    }
  }

  const applyFilters = async () => {
    try {
      const response = await axios.post('/api/example/facilities', {
        facilities: tempSelectedFacilities,
        priceRange: [0, parseInt(tempPriceRange)],
        city: city
      });
      onFilterChange(response.data.hotels);
      // Update the main state
      setSelectedFacilities(tempSelectedFacilities);
      setPriceRange(tempPriceRange);
    } catch (error) {
      console.error('Filter error', error);
      setError("Failed to filter hotels");
    }
  };

  const handleFacilityChange = (facility) => {
    setTempSelectedFacilities(prev => 
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
        Price: ${tempPriceRange}
      </label>
      <input 
        type="range" 
        name="price" 
        id="price" 
        min={100} 
        max={2000} 
        value={tempPriceRange}
        onChange={(e) => setTempPriceRange(e.target.value)}
        className="w-full"
      />
      <div className="my-10">
        <h3 className="text-xl font-bold my-3">Filter by Facilities: </h3>
        {list.length > 0 ? (
          list.map((facility) => (
            <p key={facility} className="flex items-center my-3">
              <label htmlFor={facility} className="flex-grow">{facility}</label>
              <input 
                type="checkbox" 
                name={facility} 
                id={facility} 
                className="w-5 h-5 ml-3"
                checked={tempSelectedFacilities.includes(facility)}
                onChange={() => handleFacilityChange(facility)}
              />
            </p>
          ))
        ) : (
          <p>No facilities available</p>
        )}
      </div>
      <button 
        onClick={applyFilters}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Apply Filters
      </button>
    </div>
  );
}

export default Filters;
