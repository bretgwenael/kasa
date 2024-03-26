import React from 'react';
import { Link } from 'react-router-dom';
import './housingitems.css';

function HousingItems({ housing }) {
  const { id, cover, title } = housing;
  return (
    <Link to={`/housing_resume/${id}`} className="housing-item">
    
      <img src={cover} alt={`${title} cover`} />
      <h2>{title}</h2>
    
    </Link>
  );
}

export default HousingItems;