import React from 'react';
import{ useState } from 'react';
import { useLocation } from 'react-router-dom';
import aboutList from "../../data/aboutList.json";
import housingResumeList from "../../data/housingList.json";
import "./collapse.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Collapse() {

  const location = useLocation();

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i ) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div>
      {location.pathname === '/about' ? (
        // Logique pour la page "About"
        <div className='wrapper'>
          <div className='accordion'>
            {aboutList.map((item, i ) => (
              <div className='item'>
                <div className='title' >
                  <h2>{item.title}</h2>
                  <span onClick={() => toggle(i)}>{selected === i ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
                </div>
                  <div className={ selected === i ? 'content show' : 'content'}>{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Logique pour la page "Housing Resume" 
        <div>
          {housingResumeList.map(item => (
            <div key={item.id}>
              {/* Afficher les éléments de housingResumeList pour la page "Housing Resume" */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Collapse;