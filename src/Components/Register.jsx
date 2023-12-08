import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-md p-12 rounded-md shadow-md text-center">
        <p className="text-5xl mb-7 font-bold">Sign Up</p>
        <div className="relative mb-5">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
              <img src="./icons/emailsign.png" alt="Email Icon" className="w-4" />
            </div>
          </div>
          <input className="text-sm w-full pl-10 pr-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
        </div>
        <div className="relative mb-5">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
              <img src="./icons/password.png" alt="Password Icon" className="w-3" />
            </div>
          </div>
          <input className="text-sm w-full pl-10 pr-4 py-2 border border-solid border-gray-300 rounded" type="password" placeholder="Password" />
        </div>
        <div className="relative mb-5">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
              <img src="./icons/password.png" alt="Password Again Icon" className="w-3" />
            </div>
          </div>
          <input className="text-sm w-full pl-10 pr-4 py-2 border border-solid border-gray-300 rounded" type="password" placeholder="Password Again" />
        </div>

        <div className="mt-4">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 text-white uppercase rounded text-sm tracking-wider" type="submit">
            Sign up
          </button>
        </div>

        <div className="mt-4 font-semibold text-sm text-black">
          Already have an account? <Link to="/login" className="text-red-600 hover:underline hover:underline-offset-4">Login</Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
