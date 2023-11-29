import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Items = ({ items }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  return (
    <div id="Product" className="py-16">
      <div className="container mx-auto mt-8">
        <h2 className="text-8xl font-bold mb-36 mt-28 text-center text-black">Available Cars</h2>

        <div className="grid grid-cols-1 mt-8 mb-8 gap-36">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white bg-opacity-30 backdrop-filter backdrop-blur-md p-8 rounded-md shadow-md md:flex ${
                index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div className="w-full h-48 object-cover mb-4 md:w-1/2 md:h-auto">
                {Array.isArray(item.image) ? (
                  <Slider {...sliderSettings}>
                    {item.image.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`${item.name} - ${imgIndex + 1}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                    ))}
                  </Slider>
                ) : (
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="md:w-1/2 md:ml-4">
                <div className="flex">
                  <h3 className="text-xl font-bold mb-2 text-black">{item.name}</h3>
                  <h3 className="text-sm text-gray-600 mb-2"> ({item.year})</h3>
                </div>
                <div className="flex items-center mb-2">
                  <img src="icons/fuel.png" alt="Fuel Icon" className="w-5 h-5 mr-2" />
                  <p className="text-gray-600 font-bold">{item.fuel_consumption}</p>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-blue-500 font-semibold">${item.price}</p>
                <div className="flex items-center justify-center mt-24">
                  <button className="ml-4 bg-sky-700 text-white px-4 py-2 rounded-md hover:bg-sky-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
