import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {loginCall} from '../../Redux/apiCalls.js';
// import './Login.css';

// const Button = ({ value, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="mt-6 transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg"
//     >
//       {value}
//     </button>
//   );
// };

// const Input = ({ type, id, name, label, placeholder, autoFocus }) => {
//   return (
//     <label className="text-gray-500 block mt-3">
//       {label}
//       <input
//         autoFocus={autoFocus}
//         type={type}
//         id={id}
//         name={name}
//         placeholder={placeholder}
//         className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
//       />
//     </label>
//   );
// };

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    loginCall(dispatch, {username, password});

  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
      <div className="border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
        <h1 className="font-bold text-center block text-2xl">Log In</h1>
        <form>
          <input
            type='username'
            name='username'
            placeholder='demoAdmin'
            onChange={(e) => setUsername(e.target.value)}
            className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
          />
          <input
            type='password'
            name='password'
            placeholder='1234567890'
            onChange={(e) => setPassword(e.target.value)}
            className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
          />
          <button 
          onClick={handleSubmit}
          className="mt-6 transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;