export const rajasthanCities = [
    {
      id: 1,
      name: "Jaipur",
      image: "https://images.unsplash.com/photo-1582972236019-ea9dfa7a46e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "The Pink City of India, known for its vibrant culture and historic forts",
      popularPlaces: ["Amber Fort", "Hawa Mahal", "City Palace", "Jantar Mantar"]
    },
    {
      id: 2,
      name: "Kota",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "The City of Chambal, famous for its coaching institutes and gardens",
      popularPlaces: ["Kota Barrage", "Garadia Mahadev", "Seven Wonders Park", "Kishore Sagar"]
    },
    {
      id: 3,
      name: "Udaipur",
      image: "https://images.unsplash.com/photo-1581852017103-68e8119e3ab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "The City of Lakes, renowned for its romantic setting and palaces",
      popularPlaces: ["City Palace", "Lake Pichola", "Jag Mandir", "Fateh Sagar Lake"]
    }
  ];
  
  export const touristPlaces = [
    {
      id: 1,
      cityId: 1,
      name: "Amber Fort",
      image: "https://images.unsplash.com/photo-1582972236019-ea9dfa7a46e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Magnificent fort with a blend of Hindu and Mughal architecture, offering elephant rides to the entrance",
      distanceFromCityCenter: "11 km",
      timeRequired: "3-4 hours",
      entryFee: {
        indian: 100,
        foreigner: 500,
        child: 50
      },
      bestTimeToVisit: "October to March",
      coordinates: { lat: 26.9855, lng: 75.8513 }
    },
    {
      id: 2,
      cityId: 1,
      name: "Hawa Mahal",
      image: "https://images.unsplash.com/photo-1524492412937-b33874b7bdd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Iconic 'Palace of Winds' with a unique honeycomb structure with 953 windows",
      distanceFromCityCenter: "4 km",
      timeRequired: "1-2 hours",
      entryFee: {
        indian: 50,
        foreigner: 200,
        child: 20
      },
      bestTimeToVisit: "Early morning for best views",
      coordinates: { lat: 26.9239, lng: 75.8267 }
    },
    {
      id: 3,
      cityId: 2,
      name: "Seven Wonders Park",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Park featuring miniature replicas of the seven wonders of the world",
      distanceFromCityCenter: "5 km",
      timeRequired: "2 hours",
      entryFee: {
        adult: 50,
        child: 20
      },
      bestTimeToVisit: "November to February",
      coordinates: { lat: 25.2138, lng: 75.8648 }
    },
    {
      id: 4,
      cityId: 2,
      name: "Garadia Mahadev Temple",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Ancient temple on a cliff offering breathtaking views of the Chambal River",
      distanceFromCityCenter: "35 km",
      timeRequired: "Half day",
      entryFee: {
        free: true
      },
      bestTimeToVisit: "Monsoon season for best views",
      coordinates: { lat: 25.2138, lng: 75.8648 }
    },
    {
      id: 5,
      cityId: 3,
      name: "City Palace",
      image: "https://images.unsplash.com/photo-1581852017103-68e8119e3ab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Lavish palace complex with museums, courtyards and stunning lake views",
      distanceFromCityCenter: "1 km",
      timeRequired: "2-3 hours",
      entryFee: {
        indian: 300,
        foreigner: 700,
        child: 100
      },
      bestTimeToVisit: "Early morning to avoid crowds",
      coordinates: { lat: 24.5760, lng: 73.6835 }
    }
  ];