import React, { useState } from 'react';

const SearchByStop = () => {
  const [stopName, setStopName] = useState('');
  const [buses, setBuses] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!stopName.trim()) {
      setError("Please enter a stop name.");
      setBuses([]);
      return;
    }

    setLoading(true);
    setError('');
    setBuses([]);

    try {
      const res = await fetch('https://bus-route-sayw.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stopName: stopName.trim() })
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`HTTP error ${res.status}: ${errorText}`);
      }

      const data = await res.json();

      if (data.success && Array.isArray(data.buses)) {
        setBuses(data.buses.length ? data.buses : []);
        if (!data.buses.length) setError("No buses found for this stop.");
      } else if (Array.isArray(data)) {
        setBuses(data.length ? data : []);
        if (!data.length) setError("No buses found for this stop.");
      } else {
        setError("Unexpected server response.");
      }
    } catch (err) {
      setError(`Error fetching buses: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🚏 Search Buses by Stop</h2>

      <form onSubmit={handleSearch}>
        <div className="row justify-content-center mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Stop Name (e.g., Goripalayam)"
              value={stopName}
              onChange={(e) => setStopName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
      </form>

      {loading && (
        <div className="text-center mt-3">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {buses.length > 0 && (
        <div className="mt-4">
          {buses.map((bus, idx) => (
            <div key={idx} className="card shadow-sm mb-3 border-start border-4 border-primary">
              <div className="card-body">
                <h5 className="card-title mb-2">
                  🚌 Bus No: <span className="text-primary">{bus.busNumber || 'N/A'}</span>
                </h5>
                <p className="card-text">
                  <strong>Route:</strong>{' '}
                  {bus.name ? (
                    <span>{bus.name}</span>
                  ) : (
                    <span>{bus.from || 'Unknown'} → {bus.to || 'Unknown'}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchByStop;
