import React from "react";
import { BsFillSendFill } from "react-icons/bs";

function TypeSend() {
  return (
    <div className="flex space-x-3">
      <div className=" w-[70%]">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        <button>
          {" "}
          <BsFillSendFill className=""/>
        </button>
      </div>
    </div>
  );
}

export default TypeSend;
