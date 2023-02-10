import React, { useState } from "react";
import "./imageUpload.css";
// import Bf from "../../assets/bf3.jpg";
import { IMAGE_URL, privateRequest, publicRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";

function ImageUpload() {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [pic, setPic] = useState("");

  const photoUpload = (photo) => {
    if (photo) {
      const data = new FormData();
      data.append("file", photo);
      data.append("upload_preset", "busy_force");
      data.append("cloude_name", "kalyanmitthu");
      //!..........cloudinary start............................
      fetch(IMAGE_URL, {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
      //!..........cloudinary end...............................
    } else {
      console.log("select a photo first.........!");
      alert("select a photo first.........!");
    }
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    if ((pic, title)) {
      try {
        await privateRequest.post("/gallery", { title, pic });
        alert("Image has been uploaded...!");
        setPic("");
        setTitle("");
        navigate("/");
      } catch (error) {
        alert(error.response?.data);
      }
    } else {
      alert("select the image and title first...!");
    }
  };
  return (
    <div className="upload">
      <div className="generalForm">
        <div className="form-title">
          <span>IMAGE UPLOAD</span>
        </div>
        <div className="formContainer">
          <div className="form-box-l">
            <img
              src="https://images.unsplash.com/photo-1638805981949-362f5964521e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt="box"
            />
          </div>
          <div className="form-box-r upload-r ">
            {/* <img src={Bf} alt="" className="preview" /> */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                backgroundColor: "orange",
                padding: "8px",
                borderRadius: "5px",
              }}
            >
              <label> Select a photo</label>
              <input
                type="file"
                accept=".png , .jpeg , .jpg"
                onChange={(e) => photoUpload(e.target.files[0])}
              />
            </div>

            <input
              type="string"
              placeholder="My Image"
              onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleUpload}>UPLOAD</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
