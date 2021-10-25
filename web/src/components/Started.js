import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout, Container, Button, Col, Row } from "react-bootstrap";

function Started({ name }) {
  return (
    <div>
      <h2>Home</h2>
      {name ? <h3>Hi {name}</h3> : "You are not logged in"}
    </div>
  );
}

export default Started;