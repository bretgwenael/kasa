import React from 'react';
import HousingItems from '../../components/housing/HousingItems';
import housingList from '../../data/housingList.json';
import './home.css';

function Home() {
  return (
    <div className="home">
      {housingList.map((housing) => (
        <HousingItems key={housing.id} housing={housing} />
      ))}
    </div>
  );
}

export default Home;