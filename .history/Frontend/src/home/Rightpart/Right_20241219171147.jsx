import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import TypeSend from "./TypeSend";

function Right() {
  return (
    <div className="border border-black w-[70%] bg-slate-900 text-gray-200">
      <Chatuser></Chatuser>
      <div
        className="nobar overflow-y-auto"
        style={{
          maxHeight: "calc(90vh-10vh)",
        }}>
        <Messages />
      </div>

      <TypeSend />
    </div>
  );
}

export default Right;
