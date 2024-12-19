import React from "react";
import { FaSearch } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

function Logout() {
  return (
    <div className="h-[10vh] p-5">
      <div className="text-4xl hover: duration-300 flex  rounded-md ">
        <div className=" flex bg-red-600 rounded border-separate border-black-[2px]">
          <h1 className="flex">
            <RiLogoutCircleRLine />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Logout;
