import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

const AnimatedContainer = ({ children }) => {
  const [ref, inView] = useInView({
    rootMargin: '0px 0px',
  });

  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the max width as needed

  return (
    <div
      ref={ref}
      className={`fade-in ${isMobile ? 'w-full' : 'w-1/2'} bg-white bg-opacity-30 backdrop-filter backdrop-blur-md container mx-auto px-2 md:px-4 flex flex-col items-center justify-center rounded-md ${inView ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

const Contact = () => {
  return (
    <div id="Contact" className="py-4 md:py-8">
      <AnimatedContainer>
        <h2 className="text-2xl md:text-4xl font-extrabold text-black mb-2 md:mb-4 mx-auto mt-2 md:mt-4">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:w-4/5"> {/* Adjusted maxWidth */}
          {/* Left Side: Our Location, Email, Phone */}
          <div className="md:w-1/2 pr-2 md:pr-4 mb-2 md:mb-0 text-left">
            {/* Our Location */}
            <div className="flex items-center mb-2 md:mb-4 ml-2 md:ml-7">
              <img
                src="icons/location.png"
                alt="Map"
                className="h-6 md:h-12 w-6 md:w-12 rounded-lg mr-2"
              />
              <div>
                <h3 className="text-sm md:text-lg font-semibold text-black mb-0.5">Our Location</h3>
                <p className="text-xs md:text-sm text-gray-600">123 Example Street, Cityville, State, ZIP</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center mb-2 md:mb-4 ml-2 md:ml-7">
              <img
                src="icons/email.png"
                alt="Email"
                className="h-6 md:h-12 w-6 md:w-12 rounded-lg mr-2"
              />
              <div>
                <h3 className="text-sm md:text-lg font-semibold text-black mb-0.5">Email</h3>
                <p className="text-xs md:text-sm text-gray-600">info@carshop.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center ml-2 md:ml-7">
              <img
                src="icons/phone.png"
                alt="Phone"
                className="h-6 md:h-12 w-6 md:w-12 rounded-lg mr-2"
              />
              <div>
                <h3 className="text-sm md:text-lg font-semibold text-black mb-0.5">Phone</h3>
                <p className="text-xs md:text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Right Side: Send us an Email */}
          <div className="w-full md:w-1/2 pl-2 md:pl-4">
            <div className="p-1 md:p-3 rounded-lg">
              <h3 className="text-sm md:text-lg font-bold text-black mb-1 md:mb-2">Send us an Email</h3>
              <form>
                <div className="mb-1 md:mb-2">
                  <label className="block text-left text-xs md:text-sm font-semibold text-black">Your Email</label>
                  <input
                    type="email"
                    className="w-full border rounded-md p-1 md:p-2 bg-zinc-300 text-xs md:text-sm"
                    placeholder="example@example.com"
                  />
                </div>

                <div className="mb-1 md:mb-2">
                  <label className="block text-left text-xs md:text-sm font-semibold text-black">Your Message</label>
                  <textarea
                    rows="3"
                    className="w-full border rounded-md p-1 md:p-2 bg-zinc-300 text-xs md:text-sm"
                    placeholder="Type your message here..."
                  />
                </div>

                <div className="flex items-center justify-center mt-2 md:mt-4">
                  <button
                    type="submit"
                    className="bg-sky-700 text-white py-1 px-2 md:py-2 md:px-4 rounded-md hover:bg-sky-800 text-xs md:text-sm"
                  >
                    Send Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AnimatedContainer>
    </div>
  );
};

export default Contact;
