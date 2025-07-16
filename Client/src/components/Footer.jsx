import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-light text-center py-4 mt-auto"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)', // Consistent dark, slightly transparent background
        borderTop: '1px solid rgba(255, 255, 255, 0.1)', // Subtle top border
        padding: '1.5rem 0', // More padding
      }}
    >
      <div className="container">
        <p className="mb-2" style={{ fontSize: '0.95rem' }}>
          &copy; {new Date().getFullYear()} **Madurai Bus Route Finder**. All rights reserved.
        </p>
        <p className="mb-2" style={{ fontSize: '0.85rem', color: '#adb5bd' }}>
          **Disclaimer**: Bus routes and schedules are subject to change. Please verify information locally.
        </p>
        <p className="mb-0" style={{ fontSize: '0.85rem', color: '#adb5bd' }}>
          The Temple City. For support, contact us at **logeskumarr2004@gmail.com**.
        </p>
      </div>
    </footer>
  );
};

export default Footer;