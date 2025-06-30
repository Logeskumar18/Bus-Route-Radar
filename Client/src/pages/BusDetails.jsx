// src/pages/BusDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BusDetails = () => {
  const { number } = useParams();
  const [bus, setBus] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/bus/find-route`)
      .then(res => res.json())
      .then(data => setBus(data.data));
  }, [number]);

  if (!bus) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h2>🚌 Bus Number: {bus.busNumber}</h2>
      <p>From: {bus.from} → To: {bus.to}</p>
      <h4>Stops:</h4>
      <ul>
        {bus.stops.map((stop, i) => <li key={i}>{stop.name} ({stop.km} km)</li>)}
      </ul>
    </div>
  );
};

export default BusDetails;
