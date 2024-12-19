import React from "react";
import Search from "./Search";
import Users from "./Users";
imo

function Left() {
  return (
    <div className="border border-black w-[30%] bg-black text-gray-200">
      <Search />
      <Users />
      <Logout />
    </div>
  );
}

export default Left;
