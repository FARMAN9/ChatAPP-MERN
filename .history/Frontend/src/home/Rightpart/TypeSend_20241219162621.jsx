import React from "react";
import { BsFillSendFill } from "react-icons/bs";

function TypeSend() {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        
      </div>

      <BsFillSendFill />

      <button></button>
    </div>
  );
}

export default TypeSend;
