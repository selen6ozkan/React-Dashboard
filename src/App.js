import "./App.css";
import Sidebar from "./components.js/Sidebar";
import Navbar from "./components.js/Navbar";
import Main from "./components.js/Main";
import { Container, Row, Col } from "reactstrap";
import {useState} from 'react';

function App() {

  let [showSidebar, setShowSidebar] = useState(false)



  const cardStyle = {
    color: "white",
    backgroundColor: "#DD2F6E",
  };
  const imgStyle = {};

  return (
    <div className="App">
   
            <Sidebar
              setShowSidebar={setShowSidebar} 
              showSidebar={showSidebar} 
            />

            
            <div className="rightbar">


              <Navbar 
              setShowSidebar={setShowSidebar} 
              showSidebar={showSidebar} 
              />


              <Main />
            </div>
      
     
   
    </div>
  );
}

export default App;
