import React, { useState, useRef } from 'react';
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
  const [expandedItems, setExpandedItems] = useState([]); 
  const availableCarsRef = useRef(null);

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
        // If the item is already in favorites, remove it
        setFavorites(favorites.filter((fav) => fav.id !== itemId));
      } else {
        // If the item is not in favorites, add it
        setFavorites([...favorites, itemToAdd]);
      }
    }
  };

  const isFavorite = (itemId) => {
    return favorites.some((fav) => fav.id === itemId);
  };

  const toggleItemExpansion = (itemId) => {
    setExpandedItems((prevExpandedItems) => {
      const isExpanded = prevExpandedItems.includes(itemId);
      return isExpanded
        ? prevExpandedItems.filter((id) => id !== itemId)
        : [...prevExpandedItems, itemId];
    });
  };

  const isItemExpanded = (itemId) => {
    return expandedItems.includes(itemId);
  };

  return (
    <div id="Product" className="py-8">
      <div className="container mx-auto mt-4 max-w-2xl">
        <h2 ref={availableCarsRef} className="text-4xl font-extrabold mb-8 text-center text-black">
          Available Cars
        </h2>
        <div className="grid grid-cols-1 mt-4 mb-4 gap-4 md:gap-8">
          {displayedItems.map((item, index) => (
            <AnimatedContainer key={item.id}>
              <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md p-4 md:p-6 rounded-md shadow-md md:flex flex-col relative">
                <div className="md:w-full mb-2 mx-auto">
                  {Array.isArray(item.image) ? (
                    <Slider {...sliderSettings}>
                      {item.image.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${item.name} - ${imgIndex + 1}`}
                          className="w-full md:h-full object-cover rounded-md"
                        />
                      ))}
                    </Slider>
                  ) : (
                    <img src={item.image} alt={item.name} className="w-full h-full md:h-full object-cover rounded-md" />
                  )}
                </div>
                <div className="md:w-full md:ml-2">
                  <div className="flex">
                    <h3 className="text-xl font-bold mb-1 text-black mt-5">{item.name}</h3>
                    <h3 className="text-sm text-gray-600 mb-1 mt-6 ml-2"> ({item.year})</h3>
                  </div>
                  <p className="text-gray-600 mb-1 text-sm">
                    {isItemExpanded(item.id) ? item.description : `${item.description.slice(0, 100)}...`}
                    <span
                      className="text-sky-700 cursor-pointer font-bold"
                      onClick={() => toggleItemExpansion(item.id)}
                    >
                      {isItemExpanded(item.id) ? '' : ' More Info'}
                    </span>
                  </p>

                  {/* Display additional info when selected */}
                  {isItemExpanded(item.id) && (
                  <div className="text-gray-600 mt-2" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    {/* Left column */}
                    <div className="md:w-1/2 pr-8 mb-8 md:mb-0 text-left">
                      <div>
                        <h2 className="text-lg font-bold text-black">{item.fuel}</h2>
                        <p className="text-sm text-gray-600">Fuel</p>
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-black">{item.fuel_consumption}</h2>
                        <p className="text-sm text-gray-600">Fuel Consumption</p>
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-black">{item.power}</h2>
                        <p className="text-sm text-gray-600">Power</p>
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="md:w-1/2 pl-8">
                      <div>
                        <h2 className="text-lg font-bold text-black">{item.switch}</h2>
                        <p className="text-sm text-gray-600">Switch</p>
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-black">{item.doors}</h2>
                        <p className="text-sm text-gray-600">Doors</p>
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-black">{item.fuel}</h2>
                        <p className="text-sm text-gray-600">Fuel</p>
                      </div>
                    </div>
                  </div>

                  {/* Less Info text */}
                  <span
                    className="text-sky-700 cursor-pointer font-bold"
                    onClick={() => toggleItemExpansion(item.id)}
                  >
                    Less Info
                  </span>
                </div>

                  )}

                  <div className="flex items-center justify-center mt-4">
                    <div>
                      <h2 className="text-base font-bold text-black mb-1">
                        <span className="text-xl text-sky-700 font-bold">{item.price}$</span>
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <button className="bg-sky-700 text-white px-3 py-1 rounded-md hover:bg-sky-800 text-sm">
                    <img src="./icons/cart.png" alt="Cart Icon" className="w-5" />
                    </button>
                    <button
                      onClick={() => addToFavorites(item.id)}
                      className={`bg-sky-700 px-3 py-1 rounded-md hover:bg-sky-800 ml-2 cursor-pointer ${
                        isFavorite(item.id) ? 'text-red-500' : 'text-gray-300'
                      } text-sm`}
                    >
                      {isFavorite(item.id) ? '❤️' : '🤍'}
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`mx-1 px-3 py-1 rounded-md ${
                page === currentPage ? 'bg-sky-700 text-white' : 'hover:bg-sky-700 hover:text-white'
              } text-sm`}
              onClick={() => {
                setCurrentPage(page);
                // Scroll to the "Available Cars" section when clicking on the next page button
                availableCarsRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
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
