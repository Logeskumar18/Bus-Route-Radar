import React, { useState } from 'react';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const SearchByNumber = () => {
  const [busNumber, setBusNumber] = useState('');
  const [bus, setBus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!busNumber.trim()) {
      setError("Please enter a bus number.");
      return;
    }

    setLoading(true);
    setError('');
    setBus(null);

    try {
      const res = await fetch(`https://bus-route-sayw.onrender.com`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ busNumber: busNumber.trim() }),
      });

      const data = await res.json();

      if (data.success && data.data) {
        setBus(data.data);
      } else {
        setError('No bus found with that number.');
      }
    } catch (err) {
      console.error(err);
      setError('Error fetching bus details.');
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🔎 Search Bus by Number</h2>

      <form onSubmit={handleSearch}>
        <div className="row justify-content-center mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter Bus Number (e.g., 24BB)"
              value={busNumber}
              onChange={(e) => setBusNumber(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {bus && (
        <div className="card p-4 shadow-sm mt-4">
          <h5 className="card-title">{bus.busNumber} - {bus.name}</h5>
          <p><strong>From:</strong> {bus.from} → <strong>To:</strong> {bus.to}</p>
          <h6>Stops:</h6>
          <ul className="list-group list-group-flush">
            {bus.stops.map((stop, index) => (
              <li className="list-group-item" key={index}>
                {stop.name} <span className="text-muted">({stop.km} km)</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchByNumber;
