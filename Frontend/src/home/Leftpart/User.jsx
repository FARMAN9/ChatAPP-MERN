import React from "react";
import useConversation from "../../Zustand/useConversation.js";

function User({ user }) {
  const { selectedConversation,setSelectedConversation } = useConversation();
  const isSelected=selectedConversation?.id===user._id;
  console.log(isSelected, user._id);

  return (
    <div className={`hover:bg-slate-600 duration-300 rounded-md ${isSelected? "bg-red-700" : ""}`}  onClick={()=>setSelectedConversation(user)}>
      <div className="flex space-x-4 px-6 py-3 hover:bg-slate-700 rounded-md cursor-pointer">
        <div className="avatar online hover:offline ">
          <div className="w-16 rounded-xl">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1 className="font-bold">{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
