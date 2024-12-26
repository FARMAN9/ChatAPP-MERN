import React, { useState } from 'react'
import useConversation from '../Zustand/useConversation.js';
import axios from 'axios';

function useSendMessages() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const SendMessages = async (message) => {
        setLoading(true);
      
          try {
            const res = await axios.post(
              `/api/message/send/${selectedConversation._id}`,{message}
            );
            setMessages([...messages,res.data]);
            console.log("messages",res.data);
            setLoading(false);
          } catch (error) {
            console.log("Error in getting messages", error);
            setLoading(false);
          }
        
      };
  return (
    {loading,SendMessages}
  )
}

export default useSendMessages;