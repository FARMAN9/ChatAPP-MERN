import React, { useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import useSendMessages from "../../contex/useSendMessages.js";
import sendaudio from "../../assets/sendonly.mp3";
import { useForm } from 'react-hook-form';



function TypeSend() {
  const [message, setMessage] = useState("");
  const {loading, SendMessages}=useSendMessages();
  
 

  const handleSubmit= async(e)=>{
    e.preventDefault();
    if(message.trim()!==""){
      await  SendMessages(message);
      const audioElement = new Audio(sendaudio);
      audioElement.play();
      setMessage("");
    }
  
  }
  
  return (
    <form onSubmit={handleSubmit} className="bg-red-700">
    <div className="flex space-x-1 h-[10vh]  bg-gray-800 dark:text-white">
      <div className="w-[70%] items-center mx-7 text-[#7480FF]">
        <input
          type="text"
          id="message"
          name="message"
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
