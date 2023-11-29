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
        'pictures/a-class1.webp',
        'pictures/a-class2.webp',
        'pictures/a-class3.webp',
        'pictures/a-class4.webp',
        'pictures/a-class5.webp',
        'pictures/a-class6.webp',
        'pictures/a-class7.webp',

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
        'pictures/s-class1.jpg',
        'pictures/s-class2.jpg',
        'pictures/s-class3.jpg',
        'pictures/s-class4.jpg',
        'pictures/s-class5.jpg',
        'pictures/s-class6.jpg',
        'pictures/s-class7.jpg',
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
        'pictures/vito1.jpg',
        'pictures/vito2.jpg',
        'pictures/vito3.jpg',
        'pictures/vito4.jpg',
        'pictures/vito5.jpg',
        'pictures/vito6.jpg',
        'pictures/vito7.jpg',
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
        'pictures/c-class1.jpg',
        'pictures/c-class2.jpg',
        'pictures/c-class3.jpg',
        'pictures/c-class4.jpg',
        'pictures/c-class5.jpg',
        'pictures/c-class6.jpg',
        'pictures/c-class7.jpg',
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
        'pictures/c-class1.jpg',
        'pictures/c-class2.jpg',
        'pictures/c-class3.jpg',
        'pictures/c-class4.jpg',
        'pictures/c-class5.jpg',
        'pictures/c-class6.jpg',
        'pictures/c-class7.jpg',
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
