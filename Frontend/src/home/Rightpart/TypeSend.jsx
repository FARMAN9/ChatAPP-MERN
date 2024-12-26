import React, { useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import useSendMessages from "../../contex/useSendMessages.js";

function TypeSend() {
  const [message, setMessage] = useState("");
  const {loading, SendMessages}=useSendMessages();
  const handleSubmit= async(e)=>{
    console.log("message",message,e);
    e.preventDefault();
    await  SendMessages(message);
    setMessage("");
  
  }
  
  return (
    <form onSubmit={handleSubmit}>
    <div className="flex space-x-2 h-[10vh] text-center  bg-slate-800 rounded-md ">
      <div className="w-[70%] items-center mx-4">
        <input
          type="text"
          value={message}
          placeholder="Type here"
          onChange={(e) => setMessage(e.target.value)}
          className="border rounded-lg border-gray-700 mt-4 w-full px-4 py-3"
        />
      </div>
      <div className="flex text-[#7480FF] p-4 ">
        <button className="p-3  rounded-full hover:-rotate-45 duration-1000">
          {" "}
          <RiSendPlane2Fill className="text-4xl" />
        </button>
      </div>
    </div>
    </form>
  );
}

export default TypeSend;
