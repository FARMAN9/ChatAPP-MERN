import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("chatapp"));
  const itsMe = message.sender === authUser.user.id;

  const chatName = itsMe ? " chat-end" : "chat-start";
  const chatColor = itsMe ? "chat-bubble-primary" : "chat-bubble-secondary";
  console.log(itsMe);

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div>
      <div className="p-2">
        <div className={`chat ${chatName}`}>
          <div className={`chat-bubble text-white ${chatColor}`}>
            {message.message}
          </div>
          <div className="chat-footer">{formattedTime}</div>
        </div>
      </div>
    </div>
  );
}

export default Message;