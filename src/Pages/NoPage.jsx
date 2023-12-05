import React from 'react';

const NoPage = () => {
  return (
    <div className="bg-gray-200 flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg">Oops! The page you are looking for does not exist.</p>
      <img src="./pictures/nopage.png" alt="NoPage" className="mt-4" />
    </div>
  );
};

export default NoPage;
