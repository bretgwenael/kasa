import React from "react";
import aboutList from "../../data/aboutList.json";
import "./collapse.css";

function Collapse() {
  return (
    <div className="about-select">
      {aboutList.map((aboutCollapse, index) => (
        <select key={index} name={aboutCollapse.title} id={aboutCollapse.title}>
          <option value={aboutCollapse.content}>{aboutCollapse.title}</option>
        </select>
      ))}
    </div>
  );
}

export default Collapse;

