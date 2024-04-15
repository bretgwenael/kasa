import React from 'react';
import banner1 from '../../assets/img_home.svg';
import banner2 from '../../assets/img_about.svg';
import "./banner.css";

function Banner({ page }) {
    
    const image = page === 'home' ? banner1 : banner2;
    
    const showParagraph = page === 'home';

    return (
        <div className='banner'>
            <img src={image} alt="Banner" />
            {showParagraph && <p>Chez vous, partout et ailleurs</p>}
        </div>
    )
}

export default Banner;