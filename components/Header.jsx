import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header className="bg-blue-500 p-4 text-white">
    <nav className="container mx-auto flex justify-between items-center">
      <Link href="/">
        Ortopan.ba
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/materials">
            Materials
          </Link>
        </li>
        <li>
          <Link href="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
