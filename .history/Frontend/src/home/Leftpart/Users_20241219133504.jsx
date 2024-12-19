import React from "react";

function Users() {
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md m">
        Messages
      </h1>
      <div className="flex space-x-4 px-6 py-3 hover:bg-slate-700 rounded-md cursor-pointer">
        <div className="avatar  online">
          <div className="w-10 rounded-xl">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1>Name</h1>
          <span>@hhhh</span>
        </div>
      </div>
    </div>
  );
}

export default Users;
