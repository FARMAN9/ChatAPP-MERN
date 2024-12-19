import React from "react";
import User from "./User";

function Users() {
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md mb-1">
        Messages
      </h1>
      <User />
      <User />
      <User />
    </div>
  );
}

export default Users;
