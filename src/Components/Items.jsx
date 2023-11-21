import React from 'react';

const Items = ({ items }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Available Cars</h2>

      <div className="grid grid-cols-1 gap-8 mt-8 mb-8">
        {items.map((item, index) => (
          <div key={item.id} className={`bg-white p-8 rounded-md shadow-md md:flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 md:w-1/2 md:h-auto" />
            <div className="md:w-1/2 md:ml-4">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.year}</p>
              
              <div className="flex items-center mb-2">
                <img src="fuel.png" alt="Fuel Icon" className="w-5 h-5 mr-2" />
                <p className="text-gray-600 font-bold">{item.fuel_consumption}</p>
              </div>

              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-blue-500 font-semibold">${item.price}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
