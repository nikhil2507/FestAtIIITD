import React, { Component } from 'react'
import axios from "axios";
import { Layout, Container, Button, Col, Row ,Card, Form} from "react-bootstrap";
import Header from './Header';
import './form.css'
export default class FormEvent extends Component {
    state={
        name:"",
        startDate:"",
        endDate:"",
    }

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
          name: this.state.name,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
        };
    
        axios({
          url: "/api/event-save",
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
        return (
            
            <div>
                {/* <Header/> */}
                <div className='form-container' style = {{display:'flex', textAlign:'center'}}>

                <div className='event-form'>
                    <h3>Event Form</h3>
                <Form onSubmit={this.submit}>
                    <Form.Group style={styles.group}>
                        <Form.Label>Event Name: </Form.Label>
                        <input
                        type="text"
                        name="name"
                        placeholder="Sample Event"
                        value={this.name}
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group style={styles.group}>
                        <Form.Label>Start Date: </Form.Label>
                        <input
                        type="text"
                        name="startDate"
                        placeholder="DD-MM-YYYY"
                        value={this.startDate}
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group style={styles.group}>
                        <Form.Label>End Date:</Form.Label>
                        <input
                        type="text"
                        name="endDate"
                        placeholder="DD-MM-YYYY"
                        value={this.endDate}
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                <button onClick={()=> alert('Event Added')} className="submit-btn" type="submit">Submit</button>
                </Form>
                </div>
            </div>
                </div>
        )
    }
}
const styles={
    heading:{
        marginTop:'0.5rem',
        color: '#343434',
        fontWeight: 'normal',
        fontSize: 30,
        fontFamily: 'Orienta, sans-serif',
    },
    container:{
        marginTop:'2rem',
        borderColor:'black',
        borderStyle:'solid',
        borderWidth:'2px',
        borderRadius:'10px',
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