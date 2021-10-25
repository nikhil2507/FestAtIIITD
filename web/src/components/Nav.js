import React,{useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Navbar.css'
import IIITD from "../images/IIITD.png"
const Nav = ({ name, setName }) => {
  const [sidebar,setSidebar]=useState(false);
  const toggle =()=>{
    setSidebar(!sidebar);
  }
  const logout = async () => {
    await axios({
      url: "api/logout",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    setName("");
  };

  let menu;

  if (name === "") {
    menu = (
      <ul className="mynav-list">
        <li style={{marginRight:'10px'}}>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <div>
        <ul className="mynav-list">
          <li className="hamburger">
            <Link to="#" className="menu-bars" onClick={toggle}>
              <FaIcons.FaBars />
            </Link>
          </li>
          <li style={{marginRight:'10px'}}>
            <Link to="/admin" className="nav-link">
              Admin
            </Link>
          </li>
          <li style={{marginRight:'10px'}}>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/login" className="nav-link" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
        <nav className={sidebar? 'nav-menu active': 'nav-menu'}>
          <ul className='nav-menu-items' onClick={toggle}>
            <li className='navbar-cross'>
                <Link to='#' className="menu-bars">
                    <AiIcons.AiOutlineClose />
                </Link>
            </li>
            <li className='nav-text'>
                <Link to="/esya">
                    Esya
                </Link>

            </li>
            <li className='nav-text'>
                <Link to="/odyssey">
                    Odyssey
                </Link>

            </li>
            <li className='nav-text'>
                <Link to="/induction">
                    Induction
                </Link>

            </li>
            <li className='nav-text'>
                <Link to="/calendar">
                    Calendar
                </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <div>
      <div className="logo-space">
        {/* IIITD LOGO and APP Logo */}
        <img src={IIITD} className='IIITD'/>
        <Link style={{marginTop:"auto",marginLeft:"2rem", marginBottom:'auto',fontSize:"1.5 rem",color:"whitesmoke"}} to="/" >
        <h1 className="app-logo">FEST@IIITD</h1> 
        </Link>
      </div>
        <div className="mynav">

          <div style={{marginTop:"auto", marginBottom:'auto',}}>{menu}</div>

        </div>
      </div>
  );
};

export default Nav;