import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import TypeSend from "./TypeSend";
import  useConversation from "../../Zustand/useConversation";
import { useEffect } from "react";
import { useAuth } from "../../contex/authprovider";
import { CiMenuFries } from "react-icons/ci";

function Right() {
  const { selectedConversation ,setSelectedConversation} = useConversation();
  console.log(selectedConversation);
  useEffect(() => {
    
    return setSelectedConversation(null);

  },[setSelectedConversation]);

  return (

    <>
    <div className=" w-full bg-slate-900 text-gray-200 min-h-full">
      
    {
      !selectedConversation ? (<Nochat/>): (
        <> 
        <Chatuser />
        <div
          className="no-bar overflow-y-auto"
          style={{ maxHeight: "calc(90vh - 10vh)" }}
          >
          <Messages />
        </div>
        <TypeSend />
        </>
      )

    }

    </div>
    </>
   
  );
}

export default Right;



const Nochat = () => {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="relative ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute right-5 mt-6"
        >
          <CiMenuFries className="text-white text-2xl" />
        </label>
        <div className="flex h-screen items-center justify-center">
        
          <h1 className="text-center m-1">
            Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser.user.fullname}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
  

}
