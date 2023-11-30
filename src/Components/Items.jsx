import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedContainer = ({ children }) => {
  const [ref, inView] = useInView({
    rootMargin: '0px 0px',
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    marginTop: inView ? 0 : -50,
    from: { opacity: 0, marginTop: -50 },
    config: { tension: 300, friction: 10 },
  });

  return <animated.div ref={ref} style={props}>{children}</animated.div>;
};

const Items = ({ items }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);

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

  // Calculate the start and end index of items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items to be displayed on the current page
  const displayedItems = items.slice(startIndex, endIndex);

  const addToFavorites = (itemId) => {
    const itemToAdd = items.find((item) => item.id === itemId);
    if (itemToAdd) {
      if (favorites.some((fav) => fav.id === itemId)) {
        // If item is already in favorites, remove it
        setFavorites(favorites.filter((fav) => fav.id !== itemId));
      } else {
        // If item is not in favorites, add it
        setFavorites([...favorites, itemToAdd]);
      }
    }
  };

  const isFavorite = (itemId) => {
    return favorites.some((fav) => fav.id === itemId);
  };

  return (
    <div id="Product" className="py-16">
      <div className="container mx-auto mt-8">
        <h2 className="text-8xl font-extrabold mb-36 mt-28 text-center text-black">Available Cars</h2>
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`mx-2 px-4 py-2 rounded-md ${page === currentPage ? 'bg-sky-700 text-white' : 'hover:bg-sky-700 hover:text-white'}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 mt-8 mb-8 gap-36">
          {displayedItems.map((item, index) => (
            <AnimatedContainer key={item.id}>
              <div
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
                  <div className="flex items-center justify-center mt-10 mb-6">
                    <button className="bg-sky-700 text-white px-4 py-2 rounded-md hover:bg-sky-800">
                      Add to Cart
                    </button>
                    <button
                      onClick={() => addToFavorites(item.id)}
                      className={`bg-sky-700 px-4 py-2 rounded-md hover:bg-sky-800 ml-4 cursor-pointer ${
                        isFavorite(item.id) ? 'text-red-500' : 'text-gray-300'
                      }`}
                    >
                      {isFavorite(item.id) ? '❤️' : '🤍'}
                    </button>
                  </div>
                  <p className="text-2xl text-black font-bold text-center ">${item.price}</p>


                </div>
                <div className="md:w-1/2 md:ml-4">
                  <div className="flex">
                    <h3 className="text-xl font-bold mb-2 text-black">{item.name}</h3>
                    <h3 className="text-sm text-gray-600 mb-2"> ({item.year})</h3>
                  </div>
                  <p className="text-gray-600 mb-2 w-5/6 text-justify" >{item.description}</p>
                  <div className="flex flex-wrap mt-6">
                    <div className="md:w-1/2 pr-8 mb-8 md:mb-0 text-left">
                      <div>
                        <h2 className="text-2xl font-bold text-black mb-1">{item.fuel}</h2>
                        <p className="text-lg text-gray-600">Fuel</p>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-black mb-1">{item.fuel_consumption}</h2>
                        <p className="text-lg text-gray-600">Fuel Consuption</p>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-black mb-1">{item.power}</h2>
                        <p className="text-lg text-gray-600">Power</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 pl-8">
                      <div>
                        <h2 className="text-2xl font-bold text-black mb-1">{item.switch}</h2>
                        <p className="text-lg text-gray-600">Switch</p>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-black mb-1">{item.doors}</h2>
                        <p className="text-lg text-gray-600">Doors</p>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-black mb-1">{item.fuel}</h2>
                        <p className="text-lg text-gray-600">Fuel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`mx-2 px-4 py-2 rounded-md ${page === currentPage ? 'bg-sky-700 text-white' : 'hover:bg-sky-700 hover:text-white'}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
