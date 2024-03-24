import React from 'react';
import './housingitems.css';

function HousingItems({ housing }) {
  const { id, cover, title } = housing;
  return (
    <div className="housing-item">
      <img src={cover} alt={`${title} cover`} />
      <h2>{title}</h2>
    </div>
  );
}

export default HousingItems;