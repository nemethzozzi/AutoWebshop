import React from 'react';
import Items from './Items';

const Cars = () => {

  const cars = [
    {
      id: 1,
      name: 'Mercedes E 220 d AMG Line Premium Cabriolet',
      year: 2010,
      fuel: 'diesel',
      fuel_consumption: '10l/km',
      description: 'A reliable and fuel-efficient sedan.',
      image: [
        'pictures/cabrio1.jpg',
        'pictures/cabrio2.jpg',
        'pictures/cabrio3.jpg',
        'pictures/cabrio4.jpg',
        'pictures/cabrio5.jpg',
        'pictures/cabrio6.jpg',
        'pictures/cabrio7.jpg',

      ],
      price: 1000
    },
    {
      id: 2,
      name: 'Mercedes S 350 d AMG Line Premium',
      year: 2010,
      fuel: 'diesel',
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
      name: 'Mercedes V-CLASS Mercedes-Benz Vito',
      year: 2010,
      fuel: 'diesel',
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
      fuel: 'diesel',
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
      name: 'Mercedes E 220 d AMG Line Premium Cabriolet',
      year: 2010,
      fuel: 'diesel',
      fuel_consumption: '10l/km',
      description: 'An iconic and powerful sports car.',
      image: [
        'pictures/cabrio1.jpg',
        'pictures/cabrio2.jpg',
        'pictures/cabrio3.jpg',
        'pictures/cabrio4.jpg',
        'pictures/cabrio5.jpg',
        'pictures/cabrio6.jpg',
        'pictures/cabrio7.jpg',
      ],
      price: 45000,
    },
    {
      id: 6,
      name: 'Mercedes GLS 400 d 4MATIC Night Edition',
      year: 2010,
      fuel: 'diesel',
      fuel_consumption: '10l/km',
      description: 'An iconic and powerful sports car.',
      image: [
        'pictures/gls1.jpg',
        'pictures/gls2.jpg',
        'pictures/gls3.jpg',
        'pictures/gls4.jpg',
        'pictures/gls5.jpg',
        'pictures/gls6.jpg',
        'pictures/gls7.jpg',
      ],
      price: 45000,
    },
    {
      id: 7,
      name: 'Mercedes EQS 450 4MATIC AMG Line Premium Plus SUV',
      year: 2010,
      fuel: 'diesel',
      fuel_consumption: '10l/km',
      description: 'An iconic and powerful sports car.',
      image: [
        'pictures/eqs1.jpg',
        'pictures/eqs2.jpg',
        'pictures/eqs3.jpg',
        'pictures/eqs4.jpg',
        'pictures/eqs5.jpg',
        'pictures/eqs6.jpg',
        'pictures/eqs7.jpg',
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
