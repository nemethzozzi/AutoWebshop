import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

return (
  
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-2/3 max-w-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-md p-12 rounded-md shadow-md text-center">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-3.5 w-3.5"
              fill="#FFFFFF"
              viewBox="0 0 50 50">
              <path
                d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z" />
            </svg>
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-stone-900 hover:bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-3.5 w-3.5"
              fill="#FFFFFF"
              viewBox="0 0 50 50">
              <path
                d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
            </svg>
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-white hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-3.5 w-3.5"
              viewBox="0 0 48 48">
              <path fill="#4caf50"
                d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
              <path 
                fill="#1e88e5" 
                d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
              <polygon 
                fill="#e53935" 
                points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
              <path 
                fill="#c62828"
                d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
              <path 
                fill="#fbc02d"
                d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/>
            </svg>
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-black">Or</p>
        </div>
        <div className="relative mb-5">
          <img src="./icons/emailsign.png" alt="Email Icon" className="w-5 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input className="text-sm w-full pl-10 pr-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
        </div>
        <div className="relative mb-5">
          <img src="./icons/password.png" alt="Email Icon" className="w-5 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input className="text-sm w-full pl-10 pr-4 py-2 border border-solid border-gray-300 rounded" type="password" placeholder="Password" />
        </div>
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-black cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-sky-400 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
        </div>
        <div className="mt-4">
          <button className="bg-sky-600 hover:bg-sky-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-black text-center md:text-left">
          Don't have an account? <a className="text-sky-400 hover:underline hover:underline-offset-4">
          <Link to="/register">Register</Link>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Login;