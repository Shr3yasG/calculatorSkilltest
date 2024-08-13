import React from 'react';

const Button = ({ value, onClick, isPressed, className = '' }) => {
  return (
    <button
      className={`${
        isPressed ? 'bg-gray-500' : 'bg-gray-700'
      } text-white text-2xl p-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${className}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
