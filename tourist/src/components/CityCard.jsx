import React from 'react';
import { Link } from 'react-router-dom';

const CityCard = ({ city }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105">
      <img className="w-full h-48 object-cover" src={city.image} alt={city.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-rajasthan-blue">{city.name}</div>
        <p className="text-gray-700 text-base">{city.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {city.popularPlaces.map((place, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {place}
          </span>
        ))}
      </div>
      <div className="px-6 py-4">
        <Link 
          to={`/city/${city.id}`}
          className="bg-rajasthan-orange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Explore {city.name}
        </Link>
      </div>
    </div>
  );
};

export default CityCard;