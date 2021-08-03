import "./App.css";
import Sidebar from "./components.js/Sidebar";
import Navbar from "./components.js/Navbar";
import Main from "./components.js/Main";

import { useState } from "react";
import {BrowserRouter as Router,Switch,Route }  from 'react-router-dom';
import Accounts from "./pages.js/Accounts";
import Customers from "./pages.js/Customers";
import Projects from "./pages.js/Projects";
import Orders from "./pages.js/Orders";
import Inventory from "./pages.js/Inventory";
import Tasks from "./pages.js/Tasks";

function App() {
  let [open, setOpen] = useState();


  return (
    <Router>

    <div className="App">
      
      <Sidebar open={open} setOpen={setOpen} />
      <div className="rightbar">
        <Navbar open={open} setOpen={setOpen} />
        <Switch>
   
      <Route path="/"  exact component={Main} />
      <Route path="/customers"  exact component={Customers} />
      <Route path="/projects"  exact component={Projects} />
      <Route path="/orders"  exact component={Orders} />
      <Route path="/inventory"  exact component={Inventory} />
      <Route path="/account"  exact component={Accounts} />
      <Route path="/tasks"  exact component={Tasks} />
     </Switch>
      </div>
    </div>
    </Router>
  );

}

export default App;
