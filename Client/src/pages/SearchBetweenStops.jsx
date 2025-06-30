// src/pages/SearchBetweenStops.jsx
import React, { useState } from 'react';

const SearchBetweenStops = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [buses, setBuses] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`http://localhost:5000/api/buses?from=${from}&to=${to}`);
    const data = await response.json();
    setBuses(data.data);
  };

  return (
    <div className="container mt-5">
      <h2>🔍 Buses Between Stops</h2>
      <input placeholder="From Stop" value={from} onChange={e => setFrom(e.target.value)} />
      <input placeholder="To Stop" value={to} onChange={e => setTo(e.target.value)} />
      <button className="btn btn-primary" onClick={handleSearch}>Search</button>

      <ul className="mt-3">
        {buses.map((bus, idx) => <li key={idx}>{bus.busNumber} - {bus.name}</li>)}
      </ul>
    </div>
  );
};

export default SearchBetweenStops;
