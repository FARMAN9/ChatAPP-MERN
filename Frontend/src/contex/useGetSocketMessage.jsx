import React, { useEffect } from 'react'
import { useSocketContext } from './socketContext.jsx'
import  useConversation  from '../Zustand/useConversation.js'
import audio from "../assets/sendrecive.mp3";

function useGetSocketMessage() {
    const {socket} = useSocketContext()
    const { selectedConversation,messages, setMessages} = useConversation();

    useEffect(() => {
       socket.on("newMessage", (newMessage) => {
          const audioElement = new Audio(audio);
          audioElement.play();
          setMessages([...messages,newMessage]); 
       })
       return () => socket.off("newMessage");

    }, [socket,messages,setMessages]);
  
}

export default useGetSocketMessage;