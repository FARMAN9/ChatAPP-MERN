import React from "react";
import Message from "./Message";
import TypeSend from "./TypeSend";

function Messages() {
  return (
    <div className=" p-4 border-black bg-red-900 " style={{minHeight:'calc(92'}}>
      <Message />
      <Message />
      <Message />

      <TypeSend />
    </div>
  );
}

export default Messages;