import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // Set the loading time in milliseconds (3.5 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-200">
      {loading ? (
        // Use the RingLoader from react-spinners as the loading spinner
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <ClipLoader size={150} color={'#0369a1'} loading={loading} />
        </div>
      ) : (
        // Render the main content when loading is complete
        children
      )}
    </div>
  );
};

export default Loader;
