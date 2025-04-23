export const rajasthanCities = [

  {
    id: 1,
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "The Pink City, famous for its historic forts, palaces, and vibrant culture",
    popularPlaces: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar", "Nahargarh Fort", "Jaigarh Fort"]
  },
  {
    id: 2,
    name: "Kota",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "The City of Chambal, famous for its coaching institutes and gardens",
    popularPlaces: ["Kota Barrage", "Garadia Mahadev", "Seven Wonders Park", "Kishore Sagar", "Chambal Garden", "City Park"]
  },
  {
    id: 3,
    name: "Udaipur",
    image: "https://images.unsplash.com/photo-1587583770025-32851bad462e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "The City of Lakes, known for its romantic palaces and beautiful lakes",
    popularPlaces: ["City Palace", "Lake Pichola", "Jag Mandir", "Fateh Sagar Lake", "Sajjangarh", "Jagdish Temple"]
  },
  {
    id: 4,
    name: "Jodhpur",
    image: "https://images.unsplash.com/photo-1582972236019-ea9e6f8f85f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "The Blue City, dominated by the massive Mehrangarh Fort",
    popularPlaces: ["Mehrangarh Fort", "Umaid Bhawan Palace", "Jaswant Thada", "Mandore Gardens", "Clock Tower Market", "Ghanta Ghar"]
  },
  {
    id: 5,
    name: "Jaisalmer",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "The Golden City, famous for its sandstone architecture and desert culture",
    popularPlaces: ["Jaisalmer Fort", "Patwon Ki Haveli", "Sam Sand Dunes", "Gadisar Lake", "Salim Singh Ki Haveli", "Desert National Park"]
  }
];

export const touristPlaces = [
  // Jaipur places
  {
    id: 8,
    cityId: 1,
    name: "Hawa Mahal",
    image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Iconic palace with a honeycomb-like facade with 953 windows",
    distanceFromCityCenter: "1 km from Jaipur city center",
    timeRequired: "1 hour",
    entryFee: {
      adult: 50,
      child: 20
    },
    bestTimeToVisit: "Early morning for best photos",
    coordinates: { lat: 26.9239, lng: 75.8267 }
  },
  {
    id: 9,
    cityId: 1,
    name: "Amber Fort",
    image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Magnificent fort-palace with intricate carvings and mirror work",
    distanceFromCityCenter: "11 km from Jaipur city center",
    timeRequired: "2-3 hours",
    entryFee: {
      adult: 100,
      child: 50
    },
    bestTimeToVisit: "Evening for light show",
    coordinates: { lat: 26.9855, lng: 75.8513 }
  },
  {
    id: 10,
    cityId: 1,
    name: "City Palace",
    image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Royal palace complex housing museums and courtyards",
    distanceFromCityCenter: "1.5 km from Jaipur city center",
    timeRequired: "2 hours",
    entryFee: {
      adult: 200,
      child: 100
    },
    bestTimeToVisit: "Morning to avoid crowds",
    coordinates: { lat: 26.9258, lng: 75.8237 }
  },
  
  // Existing Kota places (id 1-7)
  {
    id: 1,
    cityId: 2,
    name: "Seven Wonders Park",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Park featuring miniature replicas of the seven wonders of the world",
    distanceFromCityCenter: "5 km from Kota Junction",
    timeRequired: "2 hours",
    entryFee: {
      adult: 50,
      child: 20
    },
    bestTimeToVisit: "November to February",
    coordinates: { lat: 25.2138, lng: 75.8648 }
  },
  {
    id: 2,
    cityId: 2,
    name: "Garadia Mahadev Temple",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Ancient temple on a cliff offering breathtaking views of the Chambal River",
    distanceFromCityCenter: "35 km from Kota Junction",
    timeRequired: "Half day",
    entryFee: {
      free: true
    },
    bestTimeToVisit: "Monsoon season for best views",
    coordinates: { lat: 25.2138, lng: 75.8648 }
  },
  {
    id: 3,
    cityId: 2,
    name: "Kota Barrage",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Beautiful dam on the Chambal River with gardens and picnic spots",
    distanceFromCityCenter: "3 km from Kota Junction",
    timeRequired: "1-2 hours",
    entryFee: {
      free: true
    },
    bestTimeToVisit: "Evening for sunset views",
    coordinates: { lat: 25.1824, lng: 75.8337 }
  },
  {
    id: 4,
    cityId: 2,
    name: "Kishore Sagar",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Historic artificial lake with a beautiful palace in the middle",
    distanceFromCityCenter: "2 km from Kota Junction",
    timeRequired: "1 hour",
    entryFee: {
      free: true
    },
    bestTimeToVisit: "Early morning or evening",
    coordinates: { lat: 25.1865, lng: 75.8435 }
  },
  {
    id: 5,
    cityId: 2,
    name: "Chambal Garden",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Beautiful riverside garden with fountains and a small zoo",
    distanceFromCityCenter: "4 km from Kota Junction",
    timeRequired: "1-2 hours",
    entryFee: {
      nominal: 10
    },
    bestTimeToVisit: "October to March",
    coordinates: { lat: 25.1722, lng: 75.8378 }
  },
  {
    id: 6,
    cityId: 2,
    name: "City Park",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Well-maintained urban park with walking tracks and play areas",
    distanceFromCityCenter: "1.5 km from Kota Junction",
    timeRequired: "1 hour",
    entryFee: {
      free: true
    },
    bestTimeToVisit: "Morning or evening",
    coordinates: { lat: 25.1804, lng: 75.8532 }
  },
  {
    id: 7,
    cityId: 2,
    name: "Government Museum",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Museum showcasing artifacts from Kota's rich history and culture",
    distanceFromCityCenter: "2.5 km from Kota Junction",
    timeRequired: "1-2 hours",
    entryFee: {
      adult: 20,
      child: 10
    },
    bestTimeToVisit: "Any time",
    coordinates: { lat: 25.1768, lng: 75.8421 }
  },
  
  // Manali places
  {
    id: 11,
    cityId: 3,
    name: "Solang Valley",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Popular adventure sports destination with stunning mountain views",
    distanceFromCityCenter: "14 km from Manali",
    timeRequired: "Half day",
    entryFee: {
      free: true
    },
    bestTimeToVisit: "May-June for summer activities, Dec-Jan for snow",
    coordinates: { lat: 32.3049, lng: 77.1666 }
  },
  {
    id: 12,
    cityId: 3,
    name: "Rohtang Pass",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "High mountain pass offering breathtaking Himalayan views",
    distanceFromCityCenter: "51 km from Manali",
    timeRequired: "Full day",
    entryFee: {
      permitRequired: true
    },
    bestTimeToVisit: "May to November (closed in winter)",
    coordinates: { lat: 32.3745, lng: 77.2444 }
  },
  {
    id: 13,
    cityId: 3,
    name: "Hidimba Temple",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Ancient cave temple dedicated to Hidimba Devi, surrounded by cedar forest",
    distanceFromCityCenter: "2.5 km from Manali",
    timeRequired: "1 hour",
    entryFee: {
      nominal: 20
    },
    bestTimeToVisit: "Morning for peaceful visit",
    coordinates: { lat: 32.2396, lng: 77.1887 }
  },
  {
    id: 14,
    cityId: 3,
    name: "City Palace",
    image: "https://images.unsplash.com/photo-1587583770025-32851bad462e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Majestic palace complex overlooking Lake Pichola with museums and courtyards",
    distanceFromCityCenter: "In city center",
    timeRequired: "2-3 hours",
    entryFee: {
      adult: 300,
      child: 100
    },
    bestTimeToVisit: "Early morning to avoid crowds",
    coordinates: { lat: 24.5760, lng: 73.6835 }
  },
  {
    id: 15,
    cityId: 3,
    name: "Lake Pichola",
    image: "https://images.unsplash.com/photo-1587583770025-32851bad462e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Iconic artificial lake with island palaces and ghats",
    distanceFromCityCenter: "In city center",
    timeRequired: "1-2 hours",
    entryFee: {
      boatRide: 400
    },
    bestTimeToVisit: "Sunset for beautiful views",
    coordinates: { lat: 24.5724, lng: 73.6790 }
  },
  
  // Jodhpur places
  {
    id: 16,
    cityId: 4,
    name: "Mehrangarh Fort",
    image: "https://images.unsplash.com/photo-1582972236019-ea9e6f8f85f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "One of India's largest forts with magnificent palaces and museums",
    distanceFromCityCenter: "5 km from city center",
    timeRequired: "3-4 hours",
    entryFee: {
      adult: 400,
      child: 200
    },
    bestTimeToVisit: "Morning when it's cooler",
    coordinates: { lat: 26.3005, lng: 73.0221 }
  },
  {
    id: 17,
    cityId: 4,
    name: "Umaid Bhawan Palace",
    image: "https://images.unsplash.com/photo-1582972236019-ea9e6f8f85f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Part palace, part museum, part luxury hotel - one of the world's largest private residences",
    distanceFromCityCenter: "6 km from city center",
    timeRequired: "1-2 hours",
    entryFee: {
      adult: 100,
      child: 50
    },
    bestTimeToVisit: "Late afternoon",
    coordinates: { lat: 26.2649, lng: 73.0489 }
  },
  
  // Jaisalmer places
  {
    id: 18,
    cityId: 5,
    name: "Jaisalmer Fort",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Living fort with shops, hotels and houses within its walls",
    distanceFromCityCenter: "In city center",
    timeRequired: "2-3 hours",
    entryFee: {
      free: true
    },
    bestTimeToVisit: "Early morning or evening",
    coordinates: { lat: 26.9117, lng: 70.9126 }
  },
  {
    id: 19,
    cityId: 5,
    name: "Sam Sand Dunes",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Classic desert dunes offering camel safaris and cultural experiences",
    distanceFromCityCenter: "40 km from Jaisalmer",
    timeRequired: "Half day to full day",
    entryFee: {
      camelSafari: 500
    },
    bestTimeToVisit: "Sunset for best experience",
    coordinates: { lat: 26.8416, lng: 70.7940 }
  }
];