import React, {useState} from 'react';
import { Layout, Container, Button, Col, Row, Card } from "react-bootstrap";

function Profile() {
    var notifications = [
        {
            id: 1,
            text: "Hello1",
        },
        {
            id: 2,
            text: "Hello2"
        }
    ]
    const [notif, setNotif] = useState("Hello");
    // setNotif("Hello Sehaj");
    return (
        <div>
            <Container>
                <Row style = {{paddingTop: 120}}>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{notif}</Card.Title>
                                <Card.Text>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ex animi voluptatem dolores distinctio voluptates, saepe laudantium vel fuga</p>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ex animi voluptatem dolores distinctio voluptates, saepe laudantium vel fuga    
                                    </p>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ex animi voluptatem dolores distinctio voluptates, saepe laudantium vel fuga    
                                    </p>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile