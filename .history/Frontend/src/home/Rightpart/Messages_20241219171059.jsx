import React from "react";
import Message from "./Message";
import TypeSend from "./TypeSend";

function Messages() {
  return (
    <div
      className=" p-4 overflow-y-auto "
      style={{ minHeight: "calc(90vh - 10vh" }}>
      <Message />
   
    </div>
  );
}

export default Messages;
