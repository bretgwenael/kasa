import React from "react";
import Collapse from "../../components/collapse/Collapse";
import Banner from "../../components/Banner/Banner";
import aboutList from "../../data/aboutList.json";
import "./about.scss";

function About() {
  return (
    <div>
      <Banner page="about" />
      <div className="wrapper">
        <div className="about_main">
          {aboutList.map(item => {
            return (
              <div key={item.id} className="about_main_collapse">
                <Collapse title={item.title} content={item.content} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default About;