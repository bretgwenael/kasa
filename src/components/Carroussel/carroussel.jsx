import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./carroussel.css";

function Carroussel({ pictures }) {
    const [imageIndex, setImageIndex] = useState(0);

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return pictures.length - 1;
            return index - 1;
        });
    }

    function showNextImage() {
        setImageIndex(index => {
            if (index === pictures.length - 1) return 0;
            return index + 1;
        });
    }

    return (
        <div className="accomodation_carroussel">
            {pictures.length > 1 && (
                <div className="image-index">{imageIndex + 1} / {pictures.length}</div>
            )}
            <div className="image-container">
                <img src={pictures[imageIndex]} alt="carroussel" className="img-slider"/>
                {pictures.length > 1 && (
                    <>
                        <button onClick={showPrevImage} className="img-slider-btn left">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button onClick={showNextImage} className="img-slider-btn right">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Carroussel;