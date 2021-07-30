import React from "react";

const Sidebar = (props) => {

  return (
    <div
      id="sidebar"
      style={  { backgroundColor: "#DD2F6E", width: "345px" }}
    >

        <i className="las la-times sidebar-close-btn" ></i>

      <div className="sidebar-brand">
        <h4>
          <i className="lab la-accusoft"></i>Accusoft
        </h4>
        
      </div>
      <div className="sidebar-menu">
        <ul>
          <li className="active">
            <a href="" className="active">
              <i className="las la-igloo"></i>Dashboard
            </a>
          </li>
          <li>
            <a href="">
              <i className="las la-users"></i>Customers
            </a>
          </li>
          <li>
            <a href="">
              <i className="las la-clipboard-list"></i>Projects
            </a>
          </li>
          <li>
            <a href="">
              <i className="las la-shopping-bag"></i>Orders
            </a>
          </li>
          <li>
            <a href="">
              <i className="las la-receipt"></i>Inventory
            </a>
          </li>
          <li>
            <a href="">
              <i className="las la-user-circle"></i>Accounts
            </a>
          </li>
          <li>
            <a href="">
              <i className="las la-clipboard-list"></i>Tasks
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
