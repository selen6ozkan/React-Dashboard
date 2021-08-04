import React, {useState,useEffect} from "react";
import {
  Link
} from "react-router-dom";
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


  useEffect(() => {
    setPath(location.pathname)
    setOpen(false)
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
            <Link to="/"  className={path === "/" ? "a-active" : " "}>
              <i className="las la-igloo"></i>Dashboard
            </Link>
          </li>
          <li  className={path === "/customers" ? "li-active" : " "}>
            <Link to="/customers" className={path === "/customers" ? "a-active" : " "}>
              <i className="las la-users"></i>Customers
            </Link>
          </li>
          <li  className={path === "/projects" ? "li-active" : " "}>
            <Link to="/projects" className={path === "/projects" ? "a-active" : " "}>
              <i className="las la-clipboard-list"></i>Projects
            </Link>
          </li>
          <li className={path === "/orders" ? "li-active" : " "}>
            <Link to="/orders"className={path === "/orders" ? "a-active" : " "} >
              <i className="las la-shopping-bag"></i>Orders
            </Link>
          </li>
          <li className={path === "/inventory" ? "li-active" : " "}>
            <Link to="/inventory" className={path === "/inventory" ? "a-active" : " "}  >
              <i className="las la-receipt"></i>Inventory
            </Link>
          </li>
          <li className={path === "/account" ? "li-active" : " "}>
            <Link to="/account" className={path === "/account" ? "a-active" : " "} >
              <i className="las la-user-circle"></i>Accounts
            </Link>
          </li>
          <li  className={path === "/tasks" ? "li-active" : " "}>
            <Link to="/tasks"  className={path === "/tasks" ? "a-active" : " "}>
              <i className="las la-clipboard-list"></i>Tasks
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
