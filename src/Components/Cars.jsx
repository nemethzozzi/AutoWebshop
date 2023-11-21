import React from 'react';
import Items from './Items';

const Cars = () => {

  const cars = [
    {
      id: 1,
      name: 'Mercedes',
      year: 2010,
      fuel_consumption: '10l/km',
      description: 'A reliable and fuel-efficient sedan.',
      image: 'mercedes1.png',
      price: 25000,
    },
    {
      id: 2,
      name: 'Mercedes Benz S Class',
      year: 2010,
      fuel_consumption: '10l/km',
      description: 'A stylish and comfortable midsize sedan.',
      image: 'mercedes2.png',
      price: 28000,
    },
    {
      id: 3,
      name: 'Mercedes',
      year: 2010,
      fuel_consumption: '10l/km',
      description: 'An iconic and powerful sports car.',
      image: 'mercedes1.png',
      price: 45000,
    },
    {
      id: 4,
      name: 'Mercedes',
      year: 2010,
      fuel_consumption: '10l/km',
      description: 'An iconic and powerful sports car.',
      image: 'mercedes1.png',
      price: 45000,
    },
  ];

  return (
    <div>
      <Items items={cars} />
    </div>
  );
};

export default Cars;
