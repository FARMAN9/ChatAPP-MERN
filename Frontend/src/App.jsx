
import "./App.css";
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./contex/authprovider";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster

 } from "react-hot-toast";

function App() {
  const [authUser, setAuthUser] = useAuth();
  useEffect(() => {
    document.documentElement.classList.add('dark'); // Force dark mode
  }, []);


  return (
 
    
    <>
       {/* <Signup></Signup> 
   
    */}


    <Routes>
   
      <Route path="/" element={
        authUser ?  (//<div className="h-screen flex-1">
       
        //<div className="flex min-h-full m-0">
       //   <Left />
         // <Right />
        //</div>
     // </div>
     <div className="drawer lg:drawer-open">
     <input
       id="my-drawer-2"
       type="checkbox"
       className="drawer-toggle"
     />
     <div className="drawer-content flex flex-col items-center justify-center">
       <Right />
     </div>
     <div className="drawer-side">
       <label
         htmlFor="my-drawer-2"
         aria-label="close sidebar"
         className="drawer-overlay"
       ></label>
       <ul className="menu w-80 min-h-full bg-black text-base-content">
         <Left />
       </ul>
     </div>
   </div>
 
     ) : <Navigate to="/login" />
      } />
      <Route path="/signup" element= {authUser? <Navigate to="/" /> : <Signup />} />
      <Route path="/login" element= {authUser? <Navigate to="/" /> : <Login />} />
 
    </Routes>
    <Toaster />
  
    </>
  );
}

export default App;
