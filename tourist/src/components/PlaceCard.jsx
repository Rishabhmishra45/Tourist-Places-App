import React from 'react';
import { Link } from 'react-router-dom';

const PlaceCard = ({ place }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full h-48 object-cover" src={place.image} alt={place.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-rajasthan-blue">{place.name}</div>
        <p className="text-gray-700 text-base mb-4">{place.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="font-semibold">Distance:</p>
            <p>{place.distanceFromCityCenter}</p>
          </div>
          <div>
            <p className="font-semibold">Time Required:</p>
            <p>{place.timeRequired}</p>
          </div>
          <div>
            <p className="font-semibold">Entry Fee:</p>
            <p>₹{place.entryFee.indian || place.entryFee.adult} (Indian)</p>
            {place.entryFee.foreigner && <p>₹{place.entryFee.foreigner} (Foreigner)</p>}
          </div>
          <div>
            <p className="font-semibold">Best Time:</p>
            <p>{place.bestTimeToVisit}</p>
          </div>
        </div>
        
        <Link 
          to={`/place/${place.id}`}
          className="bg-rajasthan-blue hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;