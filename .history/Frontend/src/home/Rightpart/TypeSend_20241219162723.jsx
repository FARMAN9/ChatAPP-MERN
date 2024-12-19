import React from "react";
import { BsFillSendFill } from "react-icons/bs";

function TypeSend() {
  return (
    <div className="flex">
      <div className=" w-">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        <button>
          {" "}
          <BsFillSendFill />
        </button>
      </div>
    </div>
  );
}

export default TypeSend;
