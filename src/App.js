import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TranslatorPage from './pages/TranslatorPage';
import RandomStringPage from './pages/RandomStringPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translator" element={<TranslatorPage />} />
        <Route path="/random-string" element={<RandomStringPage />} />
      </Routes>
    </Router>
  );
}

export default App;
