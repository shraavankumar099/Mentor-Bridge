import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AlumniPage from './pages/AlumniPage';
import MentorsPage from './pages/MentorsPage';
import DataHubPage from './pages/DataHubPage';
import SecurityPage from './pages/SecurityPage';
import CollegePage from './pages/CollegePage';
import ResourcesPage from './pages/ResourcesPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/data-hub" element={<DataHubPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/colleges" element={<CollegePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;