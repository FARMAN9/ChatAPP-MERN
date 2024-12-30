import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("api/user/logout");
      localStorage.removeItem("chatapp");
      Cookies.remove("token");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout:", error.response || error.message);
        
      toast.error("Error in logging out");
    }
  };
  return (
    <>
      <hr />
      <div className=" h-[10%] bg-transparent">
        <div>
          <BiLogOutCircle
            className="text-5xl text-red-600 hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1"
            onClick={handleLogout}
          />
        </div>
      </div>
    </>
  );
}

export default Logout;