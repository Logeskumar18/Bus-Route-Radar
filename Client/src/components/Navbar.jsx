import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => setIsOpen(false);

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark px-4 py-3"
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.9)', // Even darker, slightly transparent background
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)', // Subtle shadow
                backdropFilter: 'blur(5px)', // Add a blur effect for a modern look
            }}
        >
            <Link className="navbar-brand fw-bold fs-4 text-primary" to="/" onClick={closeMenu}>
                🚌 Madurai Bus Route Finder
            </Link>

            {/* Toggle button for small screens */}
            <button
                className="navbar-toggler border-warning" // Border color for toggler
                type="button"
                onClick={toggleNavbar}
                aria-controls="navbarNav"
                aria-expanded={isOpen ? 'true' : 'false'}
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible menu */}
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item me-3">
                        <Link
                            className="nav-link text-white-50 fw-semibold"
                            to="/search"
                            onClick={closeMenu}
                            style={{ transition: 'color 0.3s ease' }}
                            onMouseEnter={(e) => (e.target.style.color = 'skyblue')} // Hover effect
                            onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.5)')}
                        >
                            Between Stops
                        </Link>
                    </li>
                    <li className="nav-item me-3">
                        <Link
                            className="nav-link text-white-50 fw-semibold"
                            to="/stop"
                            onClick={closeMenu}
                            style={{ transition: 'color 0.3s ease' }}
                            onMouseEnter={(e) => (e.target.style.color = '#ffc107')}
                            onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.5)')}
                        >
                            By Stop
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link text-white-50 fw-semibold"
                            to="/number"
                            onClick={closeMenu}
                            style={{ transition: 'color 0.3s ease' }}
                            onMouseEnter={(e) => (e.target.style.color = '#ffc107')}
                            onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.5)')}
                        >
                            By Bus Number
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;