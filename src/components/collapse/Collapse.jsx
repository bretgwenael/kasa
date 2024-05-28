import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./collapse.css";

function Collapse({title, content}) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="collapse">
      <h2 className="collapse_title" onClick={() => setToggle(!toggle)}>
        {title}
        <span>
          {toggle ? <FontAwesomeIcon icon={faChevronDown} className="icon-large" /> : <FontAwesomeIcon icon={faChevronUp} className="icon-large" />}
        </span>
      </h2>
      <div className={toggle ? 'collapse_content_hidden' : 'collapse_content'}>
        {Array.isArray(content) ? content.map((item, index) => (
          <p key={index}>{item}</p>
        )) : content}
      </div>
    </div>
  )
}

export default Collapse;