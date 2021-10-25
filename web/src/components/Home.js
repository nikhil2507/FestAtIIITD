import React,{useState} from 'react'
import { Layout, Container, Button, Col, Row } from "react-bootstrap"; //boostrap classes
import { Link } from 'react-router-dom';
import campusImg from '../images/campus.jpg';

import './MyStyle.css';

function Home({name}) {
    let spawnButton=()=>{
        if(name==="")
            return(
                <Link style={styles.link} to="/login">
                    <button className="myBtn"><span>Get Started</span></button>
                </Link>
            )
        else{
            return(
                <Link style={styles.link} to="/dashboard">
                    <button className="myBtn"><span>Get Started</span></button>
                </Link>
            )
        }
    }
    
    return (
        <div>
            <div className="merged-photo">

            </div>
            <div className="about-info">
                <h3>What is this about?</h3>
                <p>We bring together all the campus events that take place at IIITD campus. Be it the welcoming of minds filled with fresh ideas every year on Induction, showcasing that techy geek in you at Esya, or getting high on the adrenaline rush of Odyssey, we are sure you won’t regret keeping aside your deadlines for a while. </p>
                <h4>So, what are you waiting for?</h4>
                <div className="btn-div">
                    {console.log("name = " + name)}
                    {spawnButton()}
                </div>
            </div>
            
        </div>
    )
}
const styles = {
    container:{
        display: 'flex',
        width:'100%',
        height: '500px',
        marginTop: '1.5rem',
        padding: '10px',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundColor:'skyblue',
        backgroundSize:'cover',
    },
    link:{
        marginRight:'auto',
        marginLeft:'auto',
        textDecoration:'none',
    }
}

export default Home