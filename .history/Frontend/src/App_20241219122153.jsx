import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AccordionRoot>
        <AccordionItem>
          <AccordionItemTrigger />
          <AccordionItemContent />
        </AccordionItem>
      </AccordionRoot>
    </>
  );
}

export default App;
