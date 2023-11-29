import React from 'react';

const Contact = () => {
  return (
    <div id="Contact" className="py-16 ">

    <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md container mx-auto px-4 flex flex-col md:flex-row items-center justify-center rounded-md">
        <h2 className="text-8xl font-extrabold text-black mb-8 mx-auto mt-8">Contact Us</h2>
      </div>

      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md container mx-auto px-4 flex flex-col md:flex-row items-center justify-center rounded-md">
        <div className="w-full md:w-1/2 pr-8 mb-8 md:mb-0 text-left">

          {/* Our Location */}
          <div className="flex items-center mb-8 ml-14">
            <img
              src="icons/location.png"
              alt="Map"
              className="h-16 w-16 rounded-lg mr-4"
            />
            <div>
              <h3 className="text-2xl font-semibold text-black mb-1">Our Location</h3>
              <p className="text-gray-600">123 Example Street, Cityville, State, ZIP</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center mb-8 ml-14">
            <img
              src="icons/email.png"
              alt="Email"
              className="h-16 w-16 rounded-lg mr-4"
            />
            <div>
              <h3 className="text-2xl font-semibold text-black mb-1">Email</h3>
              <p className="text-gray-600">info@carshop.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center ml-14">
            <img
              src="icons/phone.png"
              alt="Phone"
              className="h-16 w-16 rounded-lg mr-4"
            />
            <div>
              <h3 className="text-2xl font-semibold text-black mb-1">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 pl-8 mr-10">
          <div className="p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-black mb-4">Send us an Email</h3>

            <form>
              <div className="mb-4">
                <label className="block text-left text-lg font-semibold text-black">Your Email</label>
                <input
                  type="email"
                  className="w-full border rounded-md p-2 bg-zinc-300"
                  placeholder="example@example.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-left text-lg font-semibold text-black">Your Message</label>
                <textarea
                  rows="4"
                  className="w-full border rounded-md p-2 bg-zinc-300"
                  placeholder="Type your message here..."
                />
              </div>
              <div className="flex items-center justify-center mt-8">
              <button
                type="submit"
                className="bg-sky-700 text-white py-2 px-4 rounded-md hover:bg-sky-800"
              >
                Send Email
              </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
