import React, { useState } from 'react';
import BusCard from '../components/BusCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const SearchBetweenStops = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    // Input validation
    if (!from.trim() || !to.trim()) { // Use .trim() to handle whitespace-only inputs
      setError("Please enter both 'From' and 'To' stops.");
      setBuses([]); // Clear any previous results
      return;
    }

    // Reset state for new search
    setError('');
    setLoading(true);
    setBuses([]);

    try {
      const response = await fetch('http://localhost:3000/api/bus/find-route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ from: from.trim(), to: to.trim() }), // Trim inputs before sending
      });

      // Crucial: Check if the HTTP response itself was successful
      if (!response.ok) {
        // Attempt to parse error message from server if available
        const errorData = await response.json().catch(() => ({ message: `HTTP error! status: ${response.status}` }));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Backend response for find-route:", data); // Good for debugging!

      // Assuming backend response format: { success: boolean, data: array_of_buses, message?: string }
      if (data.success && Array.isArray(data.data)) {
        if (data.data.length > 0) {
          setBuses(data.data);
        } else {
          // Explicitly handle no buses found even if success is true
          setError(data.message || 'No buses found between these stops.');
        }
      } else {
        // Handle cases where 'success' is false or 'data' is not an array
        setError(data.message || 'Invalid server response or an error occurred.');
      }

    } catch (err) {
      console.error("Error fetching bus route:", err);
      // Provide a user-friendly message, potentially from the caught error
      setError(`Failed to fetch bus data. ${err.message || 'Please try again.'}`);
    } finally {
      setLoading(false); // Ensure loading is always set to false
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🔍 Find Buses Between Two Stops</h2>

      <form onSubmit={handleSearch}>
        <div className="row justify-content-center mb-4">
          <div className="col-md-4">
            <input
              className="form-control mb-2"
              placeholder="From Stop"
              value={from}
              onChange={e => setFrom(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              className="form-control mb-2"
              placeholder="To Stop"
              value={to}
              onChange={e => setTo(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2 text-center">
            <button className="btn btn-primary w-100" type="submit" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
      </form>

      {/* Conditional rendering of Loader and ErrorMessage */}
      {loading && <Loader />}
      {error && !loading && <ErrorMessage message={error} />} {/* Don't show error while loading */}

      <div className="mt-4">
        {buses.length > 0 && ( // Only render if buses exist
            <div className="card shadow-sm p-3">
                <h5>Buses available from <strong>{from}</strong> to <strong>{to}</strong>:</h5>
                <ul className="list-group list-group-flush">
                    {buses.map((bus, idx) => (
                        // Assuming BusCard is designed to take a 'bus' prop
                        <BusCard key={idx} bus={bus} />
                    ))}
                </ul>
            </div>
        )}

        {/* You might want a message if no buses are found after a successful search */}
        {!loading && !error && buses.length === 0 && (from && to) && (
            <p className="text-center text-muted">Enter stops and click search to find buses.</p>
        )}
      </div>

      {/* Debugging Aid (uncomment to see raw data) */}
      {/* <pre className="mt-4 bg-light p-3 rounded">
        Current State: {JSON.stringify({ from, to, buses, loading, error }, null, 2)}
      </pre> */}
    </div>
  );
};

export default SearchBetweenStops;