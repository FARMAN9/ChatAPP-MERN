import React from "react";
import { BsFillSendFill } from "react-icons/bs";

function TypeSend() {
  return (
    <div className="flex space-x-3 h-[10vh] text-center  bg-slate-800 rounded-md ">
      <div className="w-[70%] items-center mx-4">
        <input
          type="text"
          placeholder="Type here"
          className="border rounded-lg border-gray-700 mt-2 w-full px-4 py-3"
        />
      </div>

      <button className="flex item">
        {" "}
        <BsFillSendFill className="text-3xl" />
      </button>
    </div>
  );
}

export default TypeSend;
