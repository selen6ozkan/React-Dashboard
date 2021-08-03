import "./App.css";
import Sidebar from "./components.js/Sidebar";
import Navbar from "./components.js/Navbar";
import Main from "./components.js/Main";
import { useState } from "react";
  

function App() {
  let [open, setOpen] = useState();


  return (
    <div className="App">
      
      <Sidebar open={open} setOpen={setOpen} />
      <div className="rightbar">
        <Navbar open={open} setOpen={setOpen} />
        <Main />
      </div>
    </div>
  );
}

export default App;
