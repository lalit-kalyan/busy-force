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
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="pic"
          />
          <span>this is my image</span>
        </div>
        {/* CARD END*/}
        {/* CARD START */}
        <div className="gallery-card">
          <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="pic" />
          <span>this is my image</span>
        </div>
        {/* CARD END*/}
        {/* CARD START */}
        <div className="gallery-card">
          <img src="https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="pic" />
          <span>this is my image</span>
        </div>
        {/* CARD END*/}
        {/* CARD START */}
        <div className="gallery-card">
          <img src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80" alt="pic" />
          <span>this is my image</span>
        </div>
        {/* CARD END*/}
        {/* CARD START */}
        <div className="gallery-card">
          <img src="https://images.unsplash.com/photo-1596357395217-80de13130e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="pic" />
          <span>this is my image</span>
        </div>
        {/* CARD END*/}
        {/* CARD START */}
        <div className="gallery-card">
          <img src="https://images.unsplash.com/photo-1604480133435-25b86862d276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="pic" />
          <span>this is my image</span>
        </div>
        {/* CARD END*/}
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
