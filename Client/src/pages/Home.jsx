// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <div className="card shadow p-5">
        <h1 className="display-4 text-primary mb-3">🚍 Welcome to Madurai Bus Route Finder</h1>
        <p className="lead">Search for buses by stop or route across the city.</p>
        <button className="btn btn-primary mt-3">Search Buses</button>
      </div>
    </div>
  );
};

export default Home;
