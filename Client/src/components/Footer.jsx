import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
      <div>
        &copy; {new Date().getFullYear()} Madurai Bus Route Finder | Built with ❤️
      </div>
    </footer>
  );
};

export default Footer;
