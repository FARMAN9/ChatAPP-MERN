import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>CHAT APP </h1>
      </div>
      <div className="flex h-full">
        <Left />
        <Right></Right>
      </div>
    </>
  );
}

export default App;
