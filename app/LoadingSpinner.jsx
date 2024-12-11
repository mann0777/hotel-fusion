import { useState, useEffect } from 'react';

const LoadingSpinner = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => prevDots.length < 3 ? prevDots + '.' : '');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <p className="ml-2 text-lg">Searching{dots}</p>
    </div>
  );
};

export default LoadingSpinner;
