import React from 'react'


const Navbar = (props) => {

  let {setOpen} = props;

  let openClick = () => {
    setOpen(true)  
  }



    return (
        <header>

         
            <label className="label-navbar button" onClick={openClick}>
              <span className="las la-bars cursor-pointer"
              ></span>
            </label>
           
          <h2>
            
            Dashboard
          </h2>
          <div className="search-wrapper">
            <span className="las la-search"></span>
            <input type="search" placeholder="Search here" />
          </div>

          <div className="user-wrapper">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" width="60px" height="60px" alt="" />
            <div className="names">
              <h6>Selen</h6>
              <small>Super Admin</small>
            </div>

          </div>
        </header>
          
     
    )
}

export default Navbar
