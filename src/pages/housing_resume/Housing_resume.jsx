import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Rating from "../../components/Rating/rating";
import Collapse from '../../components/collapse/Collapse';
import Card from '../../components/Card/card';
import Tags from '../../components/Tags/tags';
import HousingList from "../../data/housingList.json";
import "./housing_resume.css";
import Carroussel from '../../components/Carroussel/carroussel';
import Error from "../page_error/Page_error";



function Housing_resume() {
  
  const { id } = useParams();
  const dataCurrentHousing = HousingList.find(data => data.id === id);

  if (!dataCurrentHousing) {
		return <Error />;
	}

  const name = dataCurrentHousing?.host.name;
  const title = dataCurrentHousing?.title;
  const location = dataCurrentHousing?.location;
  const tags = dataCurrentHousing?.tags;
  const picture = dataCurrentHousing?.host.picture;
  const pictures = dataCurrentHousing?.pictures;
  const rating = dataCurrentHousing?.rating;
  const description = dataCurrentHousing?.description;
	const equipments = dataCurrentHousing?.equipments;

  return (
          <>
          {dataCurrentHousing && (
          <div className='main-housing'>
              <div >
                  <Carroussel pictures={pictures}/>
              </div>
            <div className='block-info'>
                <div className='block-name-location-tags'>
                    <h1 style={{color:'#FF6060'}}>{title}</h1>
                    <p>{location}</p>
                    <Tags tags={tags}/>
                </div>
              <div className='block-card-rating'>
                  <Card name={name} picture={picture}/>
                  <Rating rating={rating}/>
              </div>
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
                  )}
              </>
  );
}

export default Housing_resume;