import React from "react";
import axios from "axios";
import { Layout, Container, Button, Col, Row ,Card, Form} from "react-bootstrap";
import Header from './Header';
import './form.css'
class InfoForm extends React.Component {
  state = {
    memberName: "",
    email: "",
    roll: "",
    position: "",
    eventName: "",
  };

  handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  submit = (e) => {
    e.preventDefault();

    const payload = {
      memberName: this.state.memberName,
      email: this.state.email,
      roll: this.state.roll,
      position: this.state.position,
      eventName: this.state.eventName,
    };

    axios({
      url: "/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server");
      })
      .catch(() => {
        console.log("Internal Server Error");
      });
  };

  render() {
    const { memberName, email, roll, position, eventName } = this.state;
    console.log("State:", this.state);

    return (
        <div>
          {/* <Header/> */}
            <div style={styles.container}>
                <h2 style={styles.heading}>Role Assignment</h2>
                <Form onSubmit={this.submit}>
                    <Form.Group style={styles.group}>
                        <Form.Label>Name: </Form.Label>
                        <input
                        type="text"
                        name="memberName"
                        placeholder="John Doe"
                        value={memberName}
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group style={styles.group}>
                        <Form.Label>Email:</Form.Label>
                        <input
                        type="text"
                        name="email"
                        placeholder="john@gmail.com"
                        value={email}
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group style={styles.group}>
                        <Form.Label>Roll Number:</Form.Label>
                    <input
                    type="text"
                    name="roll"
                    placeholder="2017---"
                    value={roll}
                    onChange={this.handleChange}
                    />
                    </Form.Group>
                    <Form.Group style={styles.group}>
                        <Form.Label>Role:</Form.Label>
                    <input
                    type="text"
                    name="position"
                    placeholder="OC"
                    value={position}
                    onChange={this.handleChange}
                    />
                    </Form.Group>
                    <Form.Group style={styles.group}>
                        <Form.Label>Event:</Form.Label>
                    <input
                    type="text"
                    name="eventName"
                    placeholder="Event A"
                    value={eventName}
                    onChange={this.handleChange}
                    />
                </Form.Group>

                <button onClick={()=> alert('Role Assigned')} className="submit-btn" type="submit">Submit</button>
                </Form>
            </div>
        </div>
    );
  }
}
const styles={
    heading:{
        paddingTop:'0.5rem',
        paddingBottom:'0.5rem',
        color: 'white',
        fontWeight: 'normal',
        fontSize: 30,
        fontFamily: 'Orienta, sans-serif',
        marginBottom:'1.5rem'
    },
    container:{
        color:'white',
        marginTop:'2rem',
        borderColor:'black',
        borderStyle:'solid',
        borderWidth:'0px',
        borderRadius:'10px',
        backgroundColor:'#42acab',
        textAlign:'center',
        marginLeft:'auto',
        marginRight:'auto',
        width:'40%',
    },
    group:{
        paddingLeft:'1rem',
        paddingRight: '1rem',
        display:'flex',
        justifyContent:'space-between',

    },
    button:{
        backgroundColor:'#55efc4',
    }
}
export default InfoForm;