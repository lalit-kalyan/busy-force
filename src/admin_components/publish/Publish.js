import React, { useState } from "react";
import "./publish.css";
import { BiSend } from "react-icons/bi";
import { privateRequest } from "../../requestMethods";

function Publish() {
  const [text, setText] = useState(" ");

  const sendMessageToAll = async (event) => {
    event.preventDefault();
    if (text !== " ") {
      console.log(text);
      try {
        await privateRequest.post("/message/bulk", { text });
        setText(" ");
        alert("message sent....!");
        console.log("message sent");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="publish">
      <div className="p-title">
        <span>PUBLISH MESSAGE TO MEMBERS</span>
      </div>
      <form className="p-form" onSubmit={sendMessageToAll}>
        <label>Write a message...... </label>
        <textarea
          type="text"
          placeholder="write your msg here......"
          className="p-text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit">
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
