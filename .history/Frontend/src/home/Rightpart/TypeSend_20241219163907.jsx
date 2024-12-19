import React from "react";
import { BsFillSendFill } from "react-icons/bs";

function TypeSend() {
  return (
    <div className="flex space-x-3 h-[10vh] text-center b-">
      <div className="w-[70%]">
        <input
          type="text"
          placeholder="Type here"
          className="border border-gray-700 min-w-full max-w-xs"
        />
      </div>

      <button>
        {" "}
        <BsFillSendFill className="text-3xl" />
      </button>
    </div>
  );
}

export default TypeSend;
