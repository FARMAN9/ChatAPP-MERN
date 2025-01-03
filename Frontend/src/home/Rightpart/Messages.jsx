import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../contex/useGetMessage";
import Loading from "../../components/Loading.jsx";
import useGetSocketMessage from "../../contex/useGetSocketMessage.jsx";

function Messages() {
  const { loading, messages } = useGetMessage();
  useGetSocketMessage();
   // listing incoming messages
  console.log('data',messages);

  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);
  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: "calc(90vh - 10vh)" }}
    >
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMsgRef}>
            <Message message={message} />
          </div>
        ))
      )}

      {!loading && messages.length === 0 && (
        <div>
          <p className="text-center mt-[20%]">
            Say! Hi to start the conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default Messages;