import React from 'react';
import { useParams } from 'react-router-dom';
import Rating from "../../components/Rating/rating";
import Collapse from '../../components/collapse/Collapse';
import HousingList from "../../data/housingList.json";
import "./housing_resume.css";


function Housing_resume() {
  
  const { id } = useParams();
  const dataCurrentHousing = HousingList.find(data => data.id === id);

  const rating = dataCurrentHousing.rating;
  const description = dataCurrentHousing.description;
	const equipments = dataCurrentHousing.equipments;

  return (
    <div>
      <div>
        <Rating rating={rating}/>
      </div>
      <div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
						<Collapse title={'Description'} content={description}/>
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>
				</div>
    </div>
  );
}

export default Housing_resume;