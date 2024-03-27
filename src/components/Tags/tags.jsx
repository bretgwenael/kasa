import React from 'react';
import "./tags.css";

function Tags({ tags }) {
    return (
        <div className='tags-box'>
            {tags.map((tag, index) => (
                <div key={index} className='tag'>{tag}</div>
            ))}
        </div>
    );
}

export default Tags;