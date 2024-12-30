import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import useGetAllUsers from "../../contex/userGetallusers";
import  useConversation  from "../../Zustand/useConversation";
import toast from "react-hot-toast";
import error from "../../assets/error.mp3";

function Search() {
  const [search, setSearch] = useState("");
  const [users]=useGetAllUsers();
  const {setSelectedConversation}=useConversation();
  console.log('useres  at search',users);
  const HandleSearch=(e)=>{
    e.preventDefault();
    if(!search) return;
    const conversation = users.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );
   
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    }
    else{
      const audio = new Audio(error);
      audio.play();
      toast.error("User not found");

    }
  
  };

  return (
    <div className=" h-[10vh]">
      <form onSubmit={HandleSearch}>
        <div className="flex space-x-3">
          <label className="input m-1 p-3 border-[-1px] border-gary-700 bg-slate-900 flex items-center gap-2 w-[80%]">
            <input type="text" className="grow" placeholder="Search"onChange={(e) => setSearch(e.target.value)}/>
          </label>
          <button>
            <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300 " />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
