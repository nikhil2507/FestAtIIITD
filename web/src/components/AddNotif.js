import React, { useState } from "react";
// import {getCurrentDate} from './utils'
import { Layout, Container, Button, Col, Row ,Card, Form} from "react-bootstrap";
import "./notification.css"
function AddNotif({ onAdd }) {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  // const [time, setTime] = useState("");

  // Submit form
  const onSubmit = (e) => {
    e.preventDefault();

    if (!body || !author) {
      alert("Please fill all the fields");
      return;
    }

    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        " at " +
        today.getHours() +
        ":" +
        today.getMinutes();

    setDate(today);

    onAdd({ author, body, date });

    setBody("");
    setDate("");
    setAuthor("");
  };

  return (
    <Container className="add-notif-container">

      <Form onSubmit={onSubmit} style ={styles.form}>
      <Form.Group>
        <Form.Label className="announce-text">Author</Form.Label>
      </Form.Group>
        
        <Form.Group>
        <input style = {styles.formAuthor}
          type="text"
          placeholder="Posted By"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="announce-text">Announcement</Form.Label>
        </Form.Group>
        <Form.Group>
          <input style = {styles.formAnnouncement}
            type="text"
            placeholder="Announce something to the group"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>

        {/* <Form.Group>
          <Form.Label>Day</Form.Label>
        </Form.Group>

        <Form.Group>
          <input style = {{backgroundColor:'lightgray', width:'60%',borderRadius:'0.5rem'}}
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group> */}

        {/* <Form.Group>
          <Form.Label>Time</Form.Label>
        </Form.Group>

        <Form.Group>
          <input style = {{backgroundColor:'lightgray', width:'60%', borderRadius:'0.5rem'}}
            type="text"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </Form.Group> */}
        <button className='announce-btn' type="submit" value="Post" >Post</button>
      </Form>
    </Container>
  );
}

const styles={
  form:{
    textAlign:'center',
  },
  formAuthor:{
    backgroundColor:'#f5f6fa', height:'2.5rem', width:'70%',borderRadius:'0.5rem',borderStyle:'solid',paddingLeft:'0.7rem'
  },
  formAnnouncement:{
    backgroundColor:'#f5f6fa', height:'6rem', width:'90%',borderRadius:'0.5rem',borderStyle:'solid',paddingLeft:'0.7rem'
  }
}

export default AddNotif;