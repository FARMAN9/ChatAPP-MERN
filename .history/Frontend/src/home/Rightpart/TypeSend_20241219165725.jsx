import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

function TypeSend() {
  return (
    <div className="flex space-x-3 h-[10vh] text-center  bg-slate-800 rounded-md ">
      <div className="w-[70%] items-center mx-4">
        <input
          type="text"
          placeholder="Type here"
          className="border rounded-lg border-gray-700 mt-4 w-full px-4 py-3"
        />
      </div>
      <div className="flex text-[#7480FF] p-4 ">
        <button className="p-3 border border-full rounded-full hover:-rotate-90">
          {" "}
          <RiSendPlane2Fill className="text-3xl" />
        </button>
      </div>
    </div>
  );
}

export default TypeSend;
