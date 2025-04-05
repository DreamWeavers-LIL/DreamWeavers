
import React from 'react';

const MapLocation = ({ name, description, type, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        p-4 rounded-lg cursor-pointer transition-all duration-300 mb-2
        ${isActive 
          ? 'bg-primary text-white shadow-md transform scale-105' 
          : 'bg-white hover:bg-gray-50 text-gray-800 shadow-sm hover:shadow-md'}
      `}
    >
      <div className="flex items-start">
        <div className="flex-1">
          <h3 className={`font-medium ${isActive ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
          <p className={`text-sm mt-1 ${isActive ? 'text-blue-100' : 'text-gray-600'}`}>{description}</p>
          <div className={`text-xs mt-2 inline-block px-2 py-1 rounded-full ${
            isActive 
              ? 'bg-blue-600/30 text-white' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLocation;
