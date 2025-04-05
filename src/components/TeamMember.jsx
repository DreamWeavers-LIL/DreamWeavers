
import React from 'react';

const TeamMember = ({ name, role, bio, imageUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <div 
        className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-white shadow-medium transform transition-transform duration-500 hover:scale-105"
      >
        <img 
          src={imageUrl || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=500&fit=crop&crop=faces&auto=format&q=90'} 
          alt={name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-primary font-medium mb-3">{role}</p>
      <p className="text-center text-gray-600 max-w-sm">{bio}</p>
    </div>
  );
};

export default TeamMember;
