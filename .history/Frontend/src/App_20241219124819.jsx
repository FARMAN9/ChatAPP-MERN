import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
im

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-white text-right">CHAT APP</h1>
      <Left />
      <Right></Right>
    </>
  );
}

export default App;
