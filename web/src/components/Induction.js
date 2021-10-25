import React from 'react';
import {Link} from 'react-router-dom';
import { Layout, Container, Button, Col, Row, Card } from "react-bootstrap";
import Stats from './Stats';
import Image from './Image';
import myImage from '../images/induction.PNG';
import Header from './Header';

function Induction() {

    const footfallDataPoints=[
        { y: 7000, label: "2016" },
        { y: 5000, label: "2017" },
        { y: 8400, label: "2018" },
        { y: 10200, label: "2019"},
    ]
    
    const eventDataPoints=[
        { y: 30, label: "CS:GO" },
        { y: 24, label: "Food Binge" },
        { y: 8, label: "Dance Off" },
        { y: 12, label: "Billiards"},
    ]

    return (
        <div>
            {/* <Header /> */}
            <a target="_blank" href="https://induction.iiitd.edu.in/">
            <div>
                <Image path={myImage} text = "Go to the Website" />
            </div>
            </a>
            <div style={styles.stats}>
                <Stats header="Campus Footfall" type="line" dataPoints={footfallDataPoints} />
                <Stats header="Popular Events" type="column" label="Teams" dataPoints={eventDataPoints} />
            </div>
     
            <div style={{width:'80%',marginLeft:'auto', marginRight:'auto'}}>
                <Row style = {styles.row}>
                    <Col>
                        <Card style={styles.card}>
                            {/* <Card.Img variant="top" src= /> */}
                            <Card.Body>
                                <Card.Title>Event Details</Card.Title>
                                <Card.Text>
                                    <p>Here is the list of events that will take place.</p>
                                </Card.Text> 
                                <a target="_blank" href="https://induction.iiitd.edu.in/#induction2020events">
                                    <Button variant="primary">Go To Events</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={styles.card}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>Announcements</Card.Title>
                                <Card.Text>
                                    <p>
                                        Important announcements posted by the event Organising team members.   
                                    </p>
                                </Card.Text>
                                <Link to="/odyssey/notifications">
                                    <Button variant="primary">Go To Anouncements</Button>
                                </Link>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={styles.card}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>FAQ</Card.Title>
                                <Card.Text>
                                    <p>
                                    A list of Frequently asked questions answered by Organising team.    
                                    </p>
                                </Card.Text>
                                <Button variant="primary">Go To FAQ</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
const styles={
    card:{
        borderRadius:'1rem',
        width: '18rem'
    },
    row: {
        padding: '1.5rem 0 1.5rem 0',
        marginBottom:'1rem'
    },
    stats:{
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'3.5rem',
        marginBottom:'3rem',
        width: '95%',
        boxShadow: '0px 5px 7px -1px rgba(0, 0, 0, 0.2)'
    }
}
export default Induction
