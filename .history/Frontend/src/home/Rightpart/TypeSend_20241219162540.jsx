import React from "react";
import { BsFillSendFill } from "react-icons/bs";

function TypeSend() {
  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <BsFillSendFill />
    </div>
    <button></button>
  );
}

export default TypeSend;
