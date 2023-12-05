import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="bg-gray-200 h-screen flex flex-col md:flex-row justify-center items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm bg-white bg-opacity-30 backdrop-filter backdrop-blur-md p-8 rounded-md shadow-md text-center">
        <p className="text-3xl mb-7 font-bold">Sign Up</p>
        <div className="relative mb-5">
          <img src="./icons/emailsign.png" alt="Email Icon" className="w-5 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input className="text-sm w-full pl-10 pr-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
        </div>
        <div className="relative mb-5">
          <img src="./icons/password.png" alt="Email Icon" className="w-5 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input className="text-sm w-full pl-10 pr-4 py-2 border border-solid border-gray-300 rounded" type="password" placeholder="Password" />
        </div>
        <div className="relative mb-5">
          <img src="./icons/password.png" alt="Email Icon" className="w-5 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input className="text-sm w-full pl-10 pr-4 py-2 border border-solid border-gray-300 rounded" type="password" placeholder="Password again" />
        </div>

        <div className="mt-4">
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">
            Sign up
          </button>
        </div>

        <div className="mt-4 font-semibold text-sm text-slate-500">
          Already have an account? <Link to="/login" className="text-sky-600 hover:underline hover:underline-offset-4">Login</Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
