import React from "react";
import "./App.scss";
import { LSidebar } from "./Components/LSidebar/LSidebar";
import { Main } from "./Components/Main/Main";
import { RSidebar } from "./Components/RSidebar/RSidebar";

function App() {
  return (
    <div className="App">
      <LSidebar />
      <Main />
      <RSidebar />
    </div>
  );
}

export default App;
