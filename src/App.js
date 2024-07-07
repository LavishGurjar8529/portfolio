import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import PhotoGallery from './components/PhotoGallery';
import Education from './components/Education';
import SocialAccounts from './components/SocialAccounts';
import Notice from './components/Notice';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/education" element={<Education />} />
          <Route path="/social-accounts" element={<SocialAccounts />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
