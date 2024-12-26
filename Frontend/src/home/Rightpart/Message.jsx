import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("chatapp")) || {};
  const isSender = message.sender?._id === authUser?._id;
  console.log("message", message);

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const chatName = isSender ? " chat-end" : "chat-start";
  const chatColor = isSender ? "chat-bubble-primary" : "chat-bubble-secondary";

  return (
    <div>
      <div className={`chat ${chatName}`}>
        <div className={`chat-bubble ${chatColor}`}>
          {isSender ? (
            message.message
          ) : (
            <>
              <span className="chat-bubble-username">{message.sender?.fullname}</span>
              {message.message}
            </>
          )}
        </div>
        <div className="chat-footer">{formattedTime}</div>
      </div>
    </div>
  );
}

export default Message;
