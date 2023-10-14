import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero bg-cover bg-center py-32" style={{ backgroundImage: "url('https://source.unsplash.com/featured/1280x720/?implants')" }}>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Dental Implants</h1>
        <p className="text-lg md:text-2xl text-white mb-8">Transform your smile with our dental implant solutions</p>
        <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;

