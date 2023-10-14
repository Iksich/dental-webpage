import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 py-4">
      <div className="container mx-auto text-center">
        <ul className="flex justify-center space-x-4">
          <li><a href="#" className="text-white"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#" className="text-white"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#" className="text-white"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="#" className="text-white"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <p className="text-white mt-4">© 2022 Dental Implants Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

