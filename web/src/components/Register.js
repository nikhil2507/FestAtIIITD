import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import "./register.css";
import { Form } from "react-bootstrap";
import queue from '../images/queue.jpg'
const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      password,
    };

    await axios({
      url: "api/register",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(payload),
    })
      .then(() => {
        console.log("Data has been sent to the server");
      })
      .catch(() => {
        console.log("Internal Server Error");
      });

    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="register-container">
      {/* <div className="image-div">
          <img src={queue} className="queue-image"/>
      </div> */}
      {/* style={{backgroundImage:`url(${queue})`}} */}
      <div className="form-div">
        <Form className ="reg-form" onSubmit={handleSubmit}>
          <h2>Registration Form</h2>
          <input
            className="reg-input"
            type="text"
            onChange={({ target }) => setName(target.value)}
            placeholder="Enter your username..."
          />
          <br />
          <input
            className="reg-input"
            type="text"
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Enter your email..."
          />
          <br />
          <input
            className="reg-input"
            type="password"
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Enter your password..."
          />
          <br />
          <button onClick={()=> alert('Registration Complete')} className="reg-btn" type="submit">Register Me!</button>
        </Form>
      </div>
    </div>
  );
};

export default Register;