import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchBetweenStops from './pages/SearchBetweenStops';
import BusDetails from './pages/BusDetails';
import SearchByStop from './pages/SearchByStop';

import Layout from './components/Layout';
import SearchByNumber from './pages/SearchByNumber';

const App = () => {
  return (
    <Router>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchBetweenStops />} />
          <Route path="/bus/:number" element={<BusDetails />} />
          <Route path="/stop" element={<SearchByStop />} />
          <Route path="/number" element={<SearchByNumber />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
