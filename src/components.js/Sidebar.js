import React, {useState} from "react";
import { Button } from "reactstrap";
import {
  useLocation
} from "react-router-dom";

const Sidebar = (props) => {
  let { open, setOpen } = props;
  let [path, setPath] = useState();
  let closeClick = () => {
    setOpen(false);
  };

  let location = useLocation();


  React.useEffect(() => {
    setPath(location.pathname)
  }, [location]);



  return (
    <div
      id="sidebar"
      style={{
        backgroundColor: "#DD2F6E",
        width: "345px",
        display: open ? "block" : "none",
      }}
    >
      <i className="las la-times sidebar-close-btn" onClick={closeClick}></i>

      <div className="sidebar-brand">
        <h4>
          <i className="lab la-accusoft"></i>Accusoft
        </h4>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li className={path === "/" ? "li-active" : " "}>
            <a href="/"  className={path === "/" ? "a-active" : " "}>
              <i className="las la-igloo"></i>Dashboard
            </a>
          </li>
          <li  className={path === "/customers" ? "li-active" : " "}>
            <a href="/customers" className={path === "/customers" ? "a-active" : " "}>
              <i className="las la-users"></i>Customers
            </a>
          </li>
          <li  className={path === "/projects" ? "li-active" : " "}>
            <a href="/projects" className={path === "/projects" ? "a-active" : " "}>
              <i className="las la-clipboard-list"></i>Projects
            </a>
          </li>
          <li className={path === "/orders" ? "li-active" : " "}>
            <a href="/orders"className={path === "/orders" ? "a-active" : " "} >
              <i className="las la-shopping-bag"></i>Orders
            </a>
          </li>
          <li className={path === "/inventory" ? "li-active" : " "}>
            <a href="/inventory" className={path === "/inventory" ? "a-active" : " "}  >
              <i className="las la-receipt"></i>Inventory
            </a>
          </li>
          <li className={path === "/account" ? "li-active" : " "}>
            <a href="/account" className={path === "/account" ? "a-active" : " "} >
              <i className="las la-user-circle"></i>Accounts
            </a>
          </li>
          <li  className={path === "/tasks" ? "li-active" : " "}>
            <a href="/tasks"  className={path === "/tasks" ? "a-active" : " "}>
              <i className="las la-clipboard-list"></i>Tasks
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
