import React, { useEffect, useState } from "react";
import { IMAGE_URL, privateRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import("./editMember.css");

function EditMember() {
  let navigate = useNavigate();
  const [member, setMember] = useState({});

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [joining, setJoining] = useState("");
  const [lastActive, setLastIsActive] = useState("");
  const [plan, setPlan] = useState("");
  const [planId, setPlanId] = useState("silver");
  const [pic, setPic] = useState("");
  const [isActive, setIsActive] = useState(Boolean);

  const { id } = useParams();
  //console.log(id);

  //*..IMAGE_UPLOAD.....
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
          console.log(data.url);
          setPic(data.secure_url.toString());
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

  useEffect(() => {
    const getMember = async () => {
      try {
        const res = await privateRequest.get(`/members/${id}`);
        setMember(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMember();
  }, [id]);

  const handleEditMember = async (e) => {
    //console.log(updatedMember);
    try {
      await privateRequest.put(`/members/${id}`, {
        username,
        email,
        phone,
        pic,
        joining,
        isActive,
        plan,
        planId,
        lastActive,
      });
      alert("the user has been Updated......!");
      setUsername("");
      setEmail("");
      setPhone("");
      setPic("");
      setJoining("");
      setPlan("");
      setPlanId("");
      navigate("/admin/member-list");
    } catch (error) {
      if (error.response?.data) {
        console.log(error.response?.data);
        alert(error.response?.data);
      }
    }
  };

  return (
    <div className="editMember">
      <div className="generalForm">
        <div className="form-title">
          <span>ADD NEW MEMBER</span>
        </div>

        <div className="formContainerEdit">
          <div className="editCont">
            <input
              type="file"
              className="fileinputedit"
              accept=".png , .jpeg , .jpg"
              onChange={(e) => photoUpload(e.target.files[0])}
            />
          </div>
          <div className="editCont">
            <div className="editDates">
              <div>
                <label className="dateLabel">joinign Date</label>
                <input
                  type="date"
                  onChange={(e) => setJoining(e.target.value)}
                />
              </div>
              <div>
                <label className="dateLabel">Plan Starting Date</label>
                <input
                  type="date"
                  onChange={(e) => setLastIsActive(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="editCont">
            <input
              type="text"
              placeholder={member.username}
              className="editInput"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder={member.email}
              className="editInput"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="editCont">
            <input
              type="number"
              placeholder={member.phone}
              className="editInput"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="number"
              placeholder={member.plan}
              className="editInput"
              onChange={(e) => setPlan(e.target.value)}
            />
          </div>
          <div className="editCont">
            <div className="loginplans">
              <label>Select a Plan</label>
              <select
                name="plans"
                defaultValue="silver"
                onChange={(e) => setPlanId(e.target.value)}
              >
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="platinum">Platinum</option>
                <option value="diamond">Diamond</option>
              </select>
            </div>
            <div className="loginplans">
              <label>Edit Activation</label>
              <select
                name="plans"
                defaultValue="silver"
                onChange={(e) => setIsActive(e.target.value)}
              >
                <option value="true">Activate</option>
                <option value="false">Deativate</option>
              </select>
            </div>
          </div>
          <button className="editButton" onClick={handleEditMember}>
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditMember;
