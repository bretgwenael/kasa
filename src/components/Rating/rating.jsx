import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./rating.css";

function Rating({ rating }) {

    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <FontAwesomeIcon key={index} icon={faStar} className={ratingValue <= rating ? 'star-filled' : 'star-empty'} />
                )
            })}
        </div>
    )
}

export default Rating;