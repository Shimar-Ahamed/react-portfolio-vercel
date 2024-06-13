import React from 'react';
import './Footer.css'; // Ensure this is the correct path to your CSS file

function Footer() {
  return (
    <footer className="footer"> {/* Apply the footer class here */}
      <p>
        Copyright © {new Date().getFullYear()} Shimar Ahamed
      </p>
    </footer>
  );
}

export default Footer;
