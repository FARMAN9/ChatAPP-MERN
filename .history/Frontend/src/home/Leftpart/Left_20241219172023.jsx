import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div className="border border-black w-[30%] bg-black text-gray-200 max-h-full">
      <Search />
      <Users />
      <Logout />
    </div>
  );
}

export default Left;
