import React from "react";
import "./reasons.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image4.jpg";
import image3 from "../../assets/image2.jpg";
import image4 from "../../assets/image3.jpg";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

function Reasons() {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <div>
          <img src={image1} alt="image1" className="imgFirst" />
        </div>
        <div>
          <img src={image2} alt="image2" className="imgsec" />
          <div>
            <img src={image3} alt="image3" className="imgThree" />
            <img src={image4} alt="image4" className="imgFour" />
          </div>
        </div>
      </div>
      <div className="right-r">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> choose us ? </span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="tick" /> <span> EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span> 1 FREE PROGRAM FOR NEW MEMBER </span>
          </div>
          <div>
            <img src={tick} alt="tick" /> <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        <span style={{ color: "var(--gray", fontWeight: "normal" }}>
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="nb" />
          <img src={nike} alt="nike" />
          <img src={adidas} alt="adidas" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
