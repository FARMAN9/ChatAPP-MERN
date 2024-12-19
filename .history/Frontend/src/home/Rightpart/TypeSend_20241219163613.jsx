import React from "react";
import { BsFillSendFill } from "react-icons/bs";

function TypeSend() {
  return (
    <div className="flex space-x-3 ">
      <div className="w-[70%]">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered min-w-full max-w-xs"
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
