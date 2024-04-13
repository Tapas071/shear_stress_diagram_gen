// Footer.tsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white relative ">
      <div className="container mx-auto top-0 ">
        <p>
          &copy; {new Date().getFullYear()} Beam Calculator || made with ❤️by
          Tapas Mondal
        </p>
        <p>Contact: tapas710monda@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
