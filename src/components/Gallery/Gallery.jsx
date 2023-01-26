import React from "react";
import "./gallery.css";
import Pic from "../../assets/t-image2.jpg";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery-strip">
        <span className="stroke-text gallery-text">GALLERY</span>
      </div>
      <div className="cards-container">
        {/* CARD START */}
        <div className="gallery-card">
          <img src={Pic} alt="pic" />
          <span>this is my image</span>
        </div>
        {/* CARD END*/}
      </div>
    </div>
  );
}

export default Gallery;
