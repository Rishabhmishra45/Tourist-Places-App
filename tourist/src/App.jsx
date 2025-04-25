import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/city/:cityId" element={<CityPage />} />
          <Route path="/place/:placeId" element={<PlaceDetailPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;