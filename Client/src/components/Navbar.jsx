import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <Link className="navbar-brand" to="/" onClick={closeMenu}>🚌 Bus Route Finder</Link>

            {/* Toggle button for small screens */}
            <button
                className="navbar-toggler"
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
                    <li className="nav-item">
                        <Link className="nav-link" to="/search" onClick={closeMenu}>Between Stops</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/stop" onClick={closeMenu}>By Stop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/number" onClick={closeMenu}>By Bus Number</Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
