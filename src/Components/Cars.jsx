import React from 'react';
import Items from './Items';

const Cars = () => {

  const cars = [
    {
      id: 1,
      name: 'Mercedes E 220 d AMG Line Premium Cabriolet',
      year: 2023,
      fuel: 'diesel',
      fuel_consumption: '10l/km',
      switch: 'automatic',
      power: '204 hp (150 kw)',
      doors: 5,
      description: 'The Mercedes E 220 d AMG Line Premium Cabriolet is a pinnacle of automotive refinement, seamlessly marrying luxury and performance. Its distinctive AMG Line styling commands attention, while the meticulously crafted interior offers a haven of comfort and cutting-edge technology. The E 220 d engine, known for its efficiency, ensures a spirited drive, complemented by the precision of the AMG-tuned suspension. Whether navigating urban landscapes or savoring the open road with the top down, the E 220 d AMG Line Premium Cabriolet redefines driving pleasure in a class of its own.',
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
      year: 2023,
      fuel: 'diesel',
      switch: 'automatic',
      power: '204 hp (150 kw)',
      doors: 5,
      fuel_consumption: '10l/km',
      description: 'The Mercedes S 350 d AMG Line Premium personifies automotive excellence, blending opulence with high-performance seamlessly. Its AMG Line styling exudes sophistication, while the sumptuous interior, adorned with premium materials and cutting-edge technology, creates a haven of luxury. Powered by the potent S 350 d diesel engine, this sedan delivers a commanding yet refined driving experience, complemented by the precision of the AMG Line suspension. Elevating every journey, the Mercedes S 350 d AMG Line Premium defines modern luxury, setting a benchmark for those who seek an unparalleled fusion of style and substance.',
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
      name: 'Mercedes V 220 d AMG Line extra-long',
      year: 2023,
      fuel: 'diesel',
      switch: 'automatic',
      power: '204 hp (150 kw)',
      doors: 5,
      fuel_consumption: '10l/km',
      description: 'The Mercedes V 220 d AMG Line extra-long redefines the concept of luxury travel with its combination of spaciousness, cutting-edge technology, and striking design. The extra-long wheelbase provides a generous and comfortable interior, while the AMG Line styling adds a touch of sporty elegance. Powered by the efficient V 220 d diesel engine, this van delivers a smooth and refined performance, making it an ideal choice for both executive transport and family adventures. With its premium features and attention to detail, the Mercedes V 220 d AMG Line extra-long sets a new standard for those seeking a sophisticated and versatile travel companion.',
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
      year: 2023,
      fuel: 'diesel',
      switch: 'automatic',
      power: '204 hp (150 kw)',
      doors: 5,
      fuel_consumption: '10l/km',
      description: 'The Mercedes C 200 AMG Line stands as a compelling embodiment of elegance and performance. With its sleek AMG Line design, the C 200 exudes a sporty yet refined aesthetic that captures attention on the road. Inside, the luxurious cabin seamlessly integrates cutting-edge technology, ensuring an elevated driving experience. Powered by the dynamic C 200 engine, this sedan delivers a perfect balance of power and efficiency. For those seeking a harmonious blend of style, innovation, and driving pleasure, the Mercedes C 200 AMG Line sets a remarkable standard in the luxury sedan segment.',
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
      name: 'Mercedes C 200 AMG Line Estate',
      year: 2023,
      fuel: 'diesel',
      switch: 'automatic',
      power: '204 hp (150 kw)',
      doors: 5,
      fuel_consumption: '10l/km',
      description: 'The Mercedes C 200 AMG Line Estate is a versatile blend of elegance and functionality. With its sleek AMG Line design, this estate car exudes a sporty aesthetic that seamlessly integrates with its spacious interior. The C 200 engine delivers a perfect balance of power and efficiency, making it an ideal choice for both urban commutes and long journeys. The AMG Line enhancements further elevate the driving experience, making the Mercedes C 200 AMG Line Estate a standout choice for those who prioritize style, performance, and practicality in a luxury estate car.',
      image: [
        'pictures/c-200-1.jpg',
        'pictures/c-200-2.jpg',
        'pictures/c-200-3.jpg',
        'pictures/c-200-4.jpg',
        'pictures/c-200-5.jpg',
        'pictures/c-200-6.jpg',
        'pictures/c-200-7.jpg',
      ],
      price: 45000,
    },
    {
      id: 6,
      name: 'Mercedes GLS 400 d 4MATIC Night Edition',
      year: 2023,
      fuel: 'diesel',
      switch: 'automatic',
      power: '204 hp (150 kw)',
      doors: 5,
      fuel_consumption: '10l/km',
      description: 'The Mercedes GLS 400 d 4MATIC Night Edition is the epitome of luxury SUV refinement. Boasting the commanding presence of the GLS series, the Night Edition adds a touch of exclusivity with its distinctive styling elements. The spacious and opulent interior, coupled with advanced technology, ensures a first-class driving experience for both driver and passengers. Powered by the robust GLS 400 d diesel engine with 4MATIC all-wheel drive, this SUV effortlessly combines power and versatility. For those desiring a harmonious blend of sophistication, performance, and distinctive design, the Mercedes GLS 400 d 4MATIC Night Edition stands as a premier choice in the luxury SUV market.',
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
      year: 2023,
      fuel: 'diesel',
      switch: 'automatic',
      power: '204 hp (150 kw)',
      doors: 5,
      fuel_consumption: '10l/km',
      description: 'The Mercedes EQS 450 4MATIC AMG Line Premium Plus SUV redefines the electric luxury SUV experience with cutting-edge technology and uncompromising style. The AMG Line Premium Plus trim adds a sporty touch to the innovative EQS platform, combining performance with sustainability. This all-electric SUV boasts a sophisticated interior, laden with premium features, and the advanced 4MATIC all-wheel-drive system ensures a dynamic and secure driving experience. For those seeking an eco-friendly yet luxurious SUV, the Mercedes EQS 450 4MATIC AMG Line Premium Plus stands out as a pinnacle of electric mobility.',
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
