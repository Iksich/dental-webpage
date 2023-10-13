import React from 'react';
import { useSelector } from 'react-redux';

const MaterialList = () => {
  const materials = useSelector((state) => state.materials);

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold text-blue-500 mb-4">Our Dental Materials</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {materials.map((material) => (
          <li key={material.id} className="border border-blue-200 p-4 rounded-lg">
            <div className="font-semibold text-blue-500">{material.name}</div>
            <div className="mt-2 text-gray-600">Price: ${material.price}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MaterialList;