import React from 'react';
import { Link } from 'react-router-dom';

const BusCard = ({ bus }) => {
  if (!bus) return null;

  const {
    busNumber = 'N/A',
    name = 'Untitled Route',
    from = 'Unknown Origin',
    to = 'Unknown Destination'
  } = bus;

  const isDisabled = busNumber === 'N/A';

  return (
    <div className="card my-2 p-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">
          {busNumber} - {name}
        </h5>
        <p className="card-text text-muted">
          {from} &rarr; {to}
        </p>
        <Link
          to={isDisabled ? '#' : `/bus/${busNumber}`}
          className={`btn btn-outline-primary btn-sm ${isDisabled ? 'disabled' : ''}`}
          aria-disabled={isDisabled}
          tabIndex={isDisabled ? -1 : 0}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BusCard;
