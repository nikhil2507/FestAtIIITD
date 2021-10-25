import React from 'react';
import {Link} from 'react-router-dom';
import { Layout, Container, Button, Col, Row, Card } from "react-bootstrap";
import Stats from './Stats';
import Image from './Image';
import myImage from '../images/esya.png';
import Header from'./Header';

function Esya() {

    const footfallDataPoints=[
        { y: 6000, label: "2016" },
        { y: 8500, label: "2017" },
        { y: 7200, label: "2018" },
        { y: 10000, label: "2019"},
    ]
    
    const eventDataPoints=[
        { y: 30, label: "PWNED" },
        { y: 24, label: "PUBG" },
        { y: 10, label: "Robo Wars" },
        { y: 8, label: "ProSort"},
    ]

    return (
        <div>
            {/* <Header/> */}
            <a target="_blank" href="https://esya.iiitd.edu.in/">
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
                                <Card.Title>Register</Card.Title>
                                <Card.Text>
                                    <p>
                                        Link to the form for event registration for general public.
                                    </p>
                                </Card.Text>
                                <a target="_blank" href="https://esya.iiitd.edu.in/register/">
                                <Button variant="primary">Go To Registration</Button>
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
                                <Link to="/esya/notifications">
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
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:'2rem'
    },
    stats:{
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'3.5rem',
        width: '95%',
        marginBottom:'3rem',
        boxShadow: '0px 5px 7px -1px rgba(0, 0, 0, 0.2)'
    }
}
export default Esya
