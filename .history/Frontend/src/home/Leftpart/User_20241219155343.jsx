import React from "react";

function User() {
  return (
    <div>
      <div className="flex space-x-4 px-6 py-3 hover:bg-slate-700 rounded-md cursor-pointer">
        <div className="avatar  online">
          <div className="w-16 rounded-xl">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1 className="">Name</h1>
          <span>@hhhh</span>
        </div>
      </div>
    </div>
  );
}

export default User;
