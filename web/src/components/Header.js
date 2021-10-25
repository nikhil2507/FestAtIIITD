import React, { Component,useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyNavbar from './MyNavbar';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Navbar.css';
function Header() {

  const [sidebar,setSidebar]=useState(false);
  const toggle =()=>{
    setSidebar(!sidebar);
  }

  return (
    <Navbar style={{backgroundColor:'#242323'}}>
      <Container style={styles.container}>
        <div>
          <Link to="/">
            <Navbar.Brand style={{ color: "whitesmoke" }}>
              Fest@IIITD
            </Navbar.Brand>
          </Link>
        </div>
        <div>
          <Link className="div_link">Admin</Link>
          <Link className="div_link">Login</Link>
          <Link className="div_link">Register</Link>
          
          <Link to="#" className="menu-bars" onClick={toggle}>
            <FaIcons.FaBars />
          </Link>
        </div>
      </Container>
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
    </Navbar>
  );
}

const styles={
  container:{
    display:'flex',
    justifyContent:'space-between',
  }
}

export default Header;