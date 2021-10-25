import React from 'react'
import { Layout, Container, Button, Col, Row, Card } from "react-bootstrap";
import {Link} from 'react-router-dom';
import EsyaLogo from '../images/Esya_Logo.png';
import OdysseyLogo from '../images/Odyssey_Logo.png';
import IIITDLogo from '../images/IIITD_Logo.png';
import EsyaPhoto from '../images/Esya_Photo.jpg';
import OdysseyPhoto from '../images/Odyssey_Photo.png';
import InductionPhoto from '../images/Induction_students.png'
import './dashboard.css';
import Header from './Header';
// import EventCard from './EventCard';
function Dashboard() {
    return (
        <div>
            {/* <Header/> */}
            <div className="blog-card">
                <div className="meta">
                <img className="photo" src={EsyaPhoto} width='300'></img>
                {/* <ul className="details">
                    <li className="author"><a href="#">John Doe</a></li>
                    <li className="date">Aug. 24, 2015</li>
                    <li className="tags">
                    </li>
                </ul> */}
                </div>
                <div class="description">
                    <h1>ESYA</h1>
                    <h2>TRACING THE DISTANT</h2>
                    <p> ESYA, IIIT Delhi’s annual tech fest is the epitome of celebrating all things tech and beyond. Celebrating the coder, the reader, the learner, the leader. ESYA provides them a platform to showcase their ideas and build upon them.</p>
                    <p className="read-more">
                        <Link className="read-more-link" to ='/esya'>Explore More</Link>
                    </p>
                </div>
            </div>
            <div className="blog-card">
                <div className="meta">
                <img className="photo" src={OdysseyPhoto} width='300'></img>
                {/* <ul className="details">
                    <li className="author"><a href="#">John Doe</a></li>
                    <li className="date">Aug. 24, 2015</li>
                    <li className="tags">
                    </li>
                </ul> */}
                </div>
                <div class="description">
                    <h1>ODYSSEY</h1>
                    <h2>Retro Rewind</h2>
                    <p> Feel the adrenaline rush, the pumping of your blood as We bring to you yet another spectacular edition of the 2 day event. Come participate, experience and feel the excitement.</p>
                    <p className="read-more">
                        <Link className="read-more-link" to ='/odyssey'>Explore More</Link>
                    </p>
                </div>
            </div>
            <div className="blog-card">
                <div className="meta">
                <img className="photo" src={InductionPhoto} width='300'></img>
                {/* <ul className="details">
                    <li className="author"><a href="#">John Doe</a></li>
                    <li className="date">Aug. 24, 2015</li>
                    <li className="tags">
                    </li>
                </ul> */}
                </div>
                <div class="description">
                    <h1>INDUCTION</h1>
                    <h2>The Ice Breaker</h2>
                    <p> The primary goal of our Induction Program is to make the new students acquainted and connected to the people and resources in the IIITD community. We propel to generate a plethora of opportunities and offer experiences to engage the curious minds productively.</p>
                    <p className="read-more">
                        <Link className="read-more-link" to ='/induction'>Explore More</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
const styles={
    eventGraphics:{
        width:'70%',
        display: 'flex',
    },
    eventGraphicsName:{
        margin:'auto',

    },
    eventAbout:{
        width:'30%'
    },
    container:{
        padding:0,
        marginTop:'2rem',
        width:'80%',
        borderStyle:'solid',
        borderWidth:2,
        borderRadius:8,
        borderColor:'#000000',
        display:'flex',
        justifyContent:'space-between',
    },
    row:{
        marginTop:'1.5rem',
        
    },
    link:{
        marginLeft:'auto', 
        marginRight:'auto',
    }
}
export default Dashboard
