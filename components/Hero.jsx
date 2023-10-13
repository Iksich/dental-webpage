import React from 'react';
import Link from 'next/link';

const Hero = () => (
  <section className="bg-blue-100 p-16 text-center">
    <h1 className="text-4xl font-bold text-blue-500">Welcome to Ortopan.ba</h1>
    <p className="mt-4 text-lg text-gray-600">Your trusted source for high-quality dental materials.</p>
    <Link className="bg-blue-500 text-white font-semibold py-2 px-4 mt-4 rounded-full inline-block hover:bg-blue-600" href="/materials">
        Explore Materials
    </Link>

  </section>
);

export default Hero;

