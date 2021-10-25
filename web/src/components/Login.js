import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './login.css';
import axios from "axios";
import log_vector from "../images/Login_Vector.PNG"
import { Form } from "react-bootstrap";

const Login = ({ setName }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [authen, setAuthen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    const response = await axios({
      url: "api/login",
      method: "POST",
      data: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then(() => {
        console.log("Data has been sent to the server");
      })
      .catch(() => {
        console.log("Internal Server Error");
      });
    
    
    const nameResponse = await axios({
      url: "api/user",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    
    const content = await nameResponse.data;
    // console.log(content.name);
    setAuthen(true);
    console.log(authen)
    setName(content.name);

    // const content = await response.data;
    console.log(content);
    // setName(content.name);
  };

  if (authen) {
    console.log(1)
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="outer-container">
      <div>
        <img src={log_vector} className="login-image"/>
      </div>
      <div className = "login-div">
        <Form className="form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input className="form-input"
            type="text"
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Enter your email..."
          />
          <br />
          <input
            type="password"
            className='form-input'
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Enter your password..."
          />
          <br />
          <button className="form-button" type="submit">Sign In</button>
        </Form>
      </div>
    </div>
  );
};

export default Login;