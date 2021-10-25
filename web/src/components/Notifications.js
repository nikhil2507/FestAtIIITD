import React, { useState } from "react";
import AddNotif from "./AddNotif.js";
import Notification from "./Notification.js";
import { Layout, Container, Button, Col, Row } from "react-bootstrap";
import Header from './Header';

function Notifications({ notifications, addNotification }) {
  return (
    <div>
      {/* <Header/> */}
      <Container style={styles.container}>
            {notifications.map((notif) => (
                <Row>
                    <Notification
                        author={notif.author}
                        body={notif.body}
                        date={notif.date}
                    />
                </Row>
            ))}
        
        
      </Container>
      <div>
        <AddNotif onAdd={addNotification} />
      </div>
    </div>
  );
}

const styles = {
  container:{
    marginLeft:'auto', justifyContent:'center',alignItems:'center'
  },
}

export default Notifications;