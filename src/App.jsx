import { useState } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import ParentComponent from "./ParentComponent";

function App() {
  const [name, setName] = useState("tho");
  return (
    <>
      <button onClick={() => setName("hien")}>click</button>
      <MyComponent name={name} />
      <ParentComponent />
    </>
  );
}

export default App;
