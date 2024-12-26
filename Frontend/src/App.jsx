
import "./App.css";
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./contex/authprovider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log("---------------------->",authUser);

  return (
 
    
    <>
       {/* <Signup></Signup> 
   
    */}


    <Routes>
      <Route path="/" element={
        authUser ?  <div className="h-screen flex-1">
       
        <div className="flex min-h-full m-0">
          <Left />
          <Right></Right>
          
        </div>
      </div> : <Navigate to="/login" />
      } />
      <Route path="/signup" element= {authUser? <Navigate to="/" /> : <Signup />} />
      <Route path="/login" element= {authUser? <Navigate to="/" /> : <Login />} />
    </Routes>
  
    </>
  );
}

export default App;
