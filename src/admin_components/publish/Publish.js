import React from "react";
import "./publish.css";
import { BiSend } from "react-icons/bi";

function Publish() {
  return (
    <div className="publish">
      <div className="p-title">
        <span>PUBLISH MESSAGE TO MEMBERS</span>
      </div>
      <form className="p-form">
        <label>Write a message...... </label>
        <textarea
          type="text"
          defaultValue="message for all gym members......"
          className="p-text"
        />
        <button>
          <span>Send</span>
          <i>
            <BiSend />
          </i>
        </button>
      </form>
    </div>
  );
}

export default Publish;
