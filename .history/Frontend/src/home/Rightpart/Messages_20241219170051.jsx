import React from "react";
import Message from "./Message";
import TypeSend from "./TypeSend";

function Messages() {
  return (
    <div
      className=" p-4 border-black bg-red-900 over"
      style={{ maxHeight: "calc(90vh - 10vh" }}>
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default Messages;
