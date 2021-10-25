import React from 'react'
import './admin.css'
import admin from '../images/admin.jpg';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';


function Admin() {
    return (
        <div className="admin-container">
            <div className='img-container'>
                {/* image */}
                <img src={admin} className='admin-img' />
            </div>
            <div className='admin-options'>
                <ul>
                    <Link className='option-link' to="/event-save">
                        <li className="admin-item">
                            <FaIcons.FaPlusCircle />
                            <h2>Add Event</h2>
                        </li>
                    </Link>
                    <Link className='option-link' to="/form">
                        <li className="admin-item">
                            <FaIcons.FaUserCog/>
                            <h2>Assign Role</h2>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Admin
