import React, { useEffect, useState } from "react";
import "./gallery.css";
import { BsTrash } from "react-icons/bs";
import { publicRequest, privateRequest } from "../../requestMethods";
import { useSelector } from "react-redux";

function Gallery() {
  const [images, setImages] = useState([]);
  const admin = useSelector((state) => state.admin.currentAdmin);
  //console.log(images);

  useEffect(() => {
    const getImages = async () => {
      try {
        const res = await publicRequest.get("/gallery");
        setImages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);

  const deletePhoto = async (id) => {
    try {
      await privateRequest.delete(`/gallery/${id}`);
      alert("Image has been deleted...!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="gallery">
      <div className="gallery-strip">
        <span className="stroke-text gallery-text">GALLERY</span>
      </div>
      <div className="cards-container">
        {/* CARD START */}
        {images.map((i) => (
          <div className="gallery-card" key={i._id}>
            <img src={i.pic} alt="pic" />
            <span>{i.title}</span>
            {admin?.isAdmin ? (
              <button
                className="dltImage"
                onClick={(e) => deletePhoto(i.publicId)}
              >
                <i>
                  <BsTrash />
                </i>
              </button>
            ) : (
              <></>
            )}
          </div>
        ))}
        {/* CARD END*/}
      </div>
    </div>
  );
}

export default Gallery;
