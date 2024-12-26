import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div className="border border-black w-[30%] bg-black text-gray-200 min-h-full">
      <Search />
      <div className="flex-1 py-1 overflow-y-auto"
        style={{ minHeight: "calc(90vh - 10vh)" }}>
      <Users />
      </div>
   
      <Logout />
    </div>
  );
}

export default Left;
