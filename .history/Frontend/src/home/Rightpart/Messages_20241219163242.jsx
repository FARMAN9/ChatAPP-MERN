import React from "react";
import Message from "./Message";
import TypeSend from "./TypeSend";

function Messages() {
  return (
    <div className=" p-4 min- ">
      <Message />
      <Message />
      <Message />

      <TypeSend />
    </div>
  );
}

export default Messages;
