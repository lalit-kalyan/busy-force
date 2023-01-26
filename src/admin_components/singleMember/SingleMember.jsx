import React from "react";
import "./singleMember.css";
import Img from "../../assets/t-image2.jpg";
import {
  BsChatLeftText,
  BsPersonCheck,
  BsPersonX,
  BsPencilSquare,
  BsTrash,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function SingleMember() {
  return (
    <>
      <div className="memberS">
        <div className="memberDetailsS">
          <img src={Img} alt="" />
          <span>Mitthu Kalyan</span>
        </div>
        <span>15-01-2023</span>
        <span>$-1000</span>
        <div className="membersButtonS">
          <button>
            <i>
              <BsChatLeftText />
            </i>
          </button>
          <button>
            Activate
            <i>
              <BsPersonCheck />
            </i>
          </button>
          <button>
            <Link to="/admin/editMember" className="link">
              <BsPencilSquare />
            </Link>
          </button>
          <button>
            <BsTrash />
          </button>
        </div>
      </div>
    </>
  );
}

export default SingleMember;
