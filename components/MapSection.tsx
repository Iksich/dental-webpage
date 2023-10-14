// components/MapSection.tsx
import React from 'react';

const MapSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="bg-blue-200 rounded-lg p-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123456789!2d-74.005974!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7db3db40be281f8c!2sYour%20Dental%20Implant%20Center!5e0!3m2!1sen!2sus!4v1632186169999!5m2!1sen!2sus" width="100%" height="400" style={{ border: '0' }} allowFullScreen loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
