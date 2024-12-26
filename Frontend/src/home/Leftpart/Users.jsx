import React from "react";
import User from "./User";
import useGetAllUsers from "../../contex/userGetallusers";

function Users() {
  
  const [users,loading] = useGetAllUsers();
  console.log("users is find ", users);
  return (
    
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md ">
        Messages
      </h1>
      <div
        className="py-2 no-bar overflow-y-auto "
        style={{ maxHeight: "calc(90vh - 15vh)" }}>
          
          {
            users.map((user) => (
              <User key={user._id} user={user}/>
            ))
          }
        
       
      </div>
    </div>
  );
}

export default Users;
