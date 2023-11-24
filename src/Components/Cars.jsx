import React from 'react';
import Items from './Items';

const Cars = () => {

  const cars = [
    {
      id: 1,
      name: 'Mercedes A 180 Sport Executive',
      year: 2010,
      fuel_consumption: '10l/km',
      description: 'A reliable and fuel-efficient sedan.',
      image: [
        'a-class1.webp',
        'a-class2.webp',
        'a-class3.webp',
        'a-class4.webp',
        'a-class5.webp',
        'a-class6.webp',
        'a-class7.webp',

      ],
      price: 25000,
    },
    {
      id: 2,
      name: 'Mercedes S 350 d AMG Line Premium',
      year: 2010,
      fuel_consumption: '10l/km',
      description: 'A stylish and comfortable midsize sedan.',
      image: [
        's-class1.jpg',
        's-class2.jpg',
        's-class3.jpg',
        's-class4.jpg',
        's-class5.jpg',
        's-class6.jpg',
        's-class7.jpg',
      ],
      price: 28000,
    },
    {
      id: 3,
      name: 'MERCEDES V-CLASS Mercedes-Benz Vito',
      year: 2010,
      fuel_consumption: '10l/km',
      description: 'An iconic and powerful sports car.',
      image: [
        'vito1.jpg',
        'vito2.jpg',
        'vito3.jpg',
        'vito4.jpg',
        'vito5.jpg',
        'vito6.jpg',
        'vito7.jpg',
      ],
      price: 45000,
    },
    {
      id: 4,
      name: 'Mercedes C 200 AMG Line',
      year: 2010,
      fuel_consumption: '10l/km',
      description: 'An iconic and powerful sports car.',
      image: [
        'c-class1.jpg',
        'c-class2.jpg',
        'c-class3.jpg',
        'c-class4.jpg',
        'c-class5.jpg',
        'c-class6.jpg',
        'c-class7.jpg',
      ],
      price: 45000,
    },
    {
      id: 5,
      name: 'Mercedes GLE 450 d AMG Line Premium Plus Coupé',
      year: 2010,
      fuel_consumption: '10l/km',
      description: 'An iconic and powerful sports car.',
      image: [
        'c-class1.jpg',
        'c-class2.jpg',
        'c-class3.jpg',
        'c-class4.jpg',
        'c-class5.jpg',
        'c-class6.jpg',
        'c-class7.jpg',
      ],
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
