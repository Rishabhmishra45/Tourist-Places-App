import React from 'react';
import { Link } from 'react-router-dom';

const CityCard = ({ city }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
      <div className="relative overflow-hidden h-60">
        <img 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          src={city.image} 
          alt={city.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <h3 className="text-white text-2xl font-bold">{city.name}</h3>
        </div>
      </div>
      
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-rajasthan-blue transition-colors duration-300 group-hover:text-rajasthan-orange">
          {city.name}
        </div>
        <p className="text-gray-600 text-base mb-4 line-clamp-2">{city.description}</p>
      </div>
      
      <div className="px-6 pb-4">
        {/* <div className="flex flex-wrap gap-2 mb-6">
          {city.popularPlaces.map((place, index) => (
            <span 
              key={index} 
              className="inline-block bg-rajasthan-blue/10 text-rajasthan-blue rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 hover:bg-rajasthan-orange hover:text-white"
            >
              {place}
            </span>
          ))}
        </div> */}
        
        <Link 
          to={`/city/${city.id}`}
          className="inline-block w-full text-center bg-gradient-to-r from-rajasthan-orange to-rajasthan-orange-dark text-black font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
        >
          Explore {city.name}
          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
};

export default CityCard;