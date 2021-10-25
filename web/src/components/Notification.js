import React from "react";
import { Layout, Container, Button, Col, Row ,Card} from "react-bootstrap";
import {FaTimes, FaBullhorn} from 'react-icons/fa'
import './notification.css'

function Notification({ author, body, date}) {
  return (
    <div className='announce-container'>
        <Card className="announce-card">
            <Card.Body>
                <Card.Title className='announce-title'> <FaBullhorn></FaBullhorn> Posted By: <span>{author}</span></Card.Title>

                <Card.Footer className='announce-footer' >
                    <Card.Text style={styles.body}>{body}</Card.Text>
                    <p>{date}</p>
                </Card.Footer>
            </Card.Body>
        </Card>
    </div>
  );
}

const styles={
  card:{
    textAlign:'center'
  },
  container:{
    paddingBottom:'1rem', width: '100%'
  },
  title:{
    textAlign:'left',fontSize:'1.5rem'
  },
  footer:{
    textAlign:'right'
  },
  body:{
    textAlign:'left',fontSize:'1.1rem',fontWeight:'bold'
  },

}

export default Notification;