import React from "react";
import { FaSearch } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

function Logout() {
  return (
    <div className="h-[10vh]">
      <div className="text-5xl hover:bg-slate-700 duration-300 flex  rounded-md ">
        <div className=" flex bg-red-600 rounded border-separate bor ">
          <h1>Logout</h1>
        </div>
        <RiLogoutCircleRLine />
      </div>
    </div>
  );
}

export default Logout;
