// src/pages/SearchByStop.jsx
import React, { useState } from 'react';

const SearchByStop = () => {
  const [stopName, setStopName] = useState('');
  const [buses, setBuses] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`http://localhost:5000/api/stop?name=${stopName}`);
    const data = await response.json();
    setBuses(data.data);
  };

  return (
    <div className="container mt-5">
      <h2>🚏 Buses by Stop Name</h2>
      <input placeholder="Enter Stop Name" value={stopName} onChange={e => setStopName(e.target.value)} />
      <button className="btn btn-success" onClick={handleSearch}>Search</button>

      <ul className="mt-3">
        {buses.map((bus, idx) => <li key={idx}>{bus.busNumber} - {bus.name}</li>)}
      </ul>
    </div>
  );
};

export default SearchByStop;
