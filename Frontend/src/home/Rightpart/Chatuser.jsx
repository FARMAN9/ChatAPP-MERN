import React from "react";
import  useConversation  from "../../Zustand/useConversation";
import { useSocketContext } from "../../contex/socketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const{ socket ,onlineUsers}=useSocketContext();
  const isOnline=onlineUsers.includes(selectedConversation._id);

  return (
    <div className="relative flex items-center h-[10%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
        <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute right-5
        "
      >
        <CiMenuFries className="text-white text-2xl" />
      </label>
      <div className="avatar p-2">
        <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="flex-1">
        <h1 className="font-bold lg:text-3xl sm:text-xl text-border">{selectedConversation.fullname }</h1>
        <span className="lg:text-2xl sm:text-xl" >{isOnline ? "online" : "offline"}</span>
      </div>
    </div>
  );
}

export default Chatuser;
