import React from 'react';
import "./card.css";

function Card({ picture, name }) {
    const [firstName, lastName] = name.split(' ');

    return (
        <div className="card">
            <div className="name-container">
                <p className="card-name">{firstName}</p>
                <p className="card-name">{lastName}</p>
            </div>
            <img src={picture} alt="propiétaire du logement" className='img-profil'/> 
        </div>
    );
}

export default Card;