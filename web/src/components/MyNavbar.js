import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Navbar.css';

function MyNavbar() {
    const [sidebar,setSidebar]=useState(false);
    const toggle =()=>{
        setSidebar(!sidebar);
    }
    return (
        <>
            <div className='navbar'>
                <Link to="#" className="menu-bars" onClick={toggle}>
                    <FaIcons.FaBars />
                </Link>
            </div>
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
                </ul>
            </nav>
        </>
    )
}

export default MyNavbar
