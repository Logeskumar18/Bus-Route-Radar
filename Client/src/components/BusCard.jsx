import React from 'react';
import { Link } from 'react-router-dom';

const BusCard = ({ bus }) => {
  return (
    <div className="card my-2 p-3">
      <h5>{bus.busNumber} - {bus.name}</h5>
      <p>{bus.from} → {bus.to}</p>
      <Link to={`/bus/${bus.busNumber}`} className="btn btn-outline-primary btn-sm">
        View Details
      </Link>
    </div>
  );
};

export default BusCard;
