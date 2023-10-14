import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-200 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Image src="/logo.png" alt="Logo" width={64} height={64} />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-700">Home</a></li>
            <li><a href="#" className="text-gray-700">Features</a></li>
            <li><a href="#" className="text-gray-700">About</a></li>
            <li><a href="#" className="text-gray-700">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


