import React from "react";
import "./programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png"

function Program() {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explor Our</span>
        <span>Programs</span>
        <span className="stroke-text">to Shape you</span>
      </div>
      <div className="programs-categories">
        {programsData.map((p , i) => (
          <div className="category" key={i} >
            {p.image}
            <span>{p.heading}</span>
            <span>{p.details}</span>
            <div className="joinNow">
                <span>Join Now</span>
                <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Program;
