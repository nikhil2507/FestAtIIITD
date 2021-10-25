import React from 'react'
import { Container } from 'react-bootstrap'
import 'mdbreact/dist/css/mdb.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";


function Image({path,text}) {
    return (
        <MDBView hover zoom className='flex-center' style={{ marginTop:0,width:'100%'}}>
            <a href="https://esya.iiitd.edu.in/">
                <img
                    src = {path}
                    className="img-fluid"
                />
            </a>
            <MDBMask className="flex-center" overlay="blue-slight" >
                <p className="white-text">Click to go to the website</p>
            </MDBMask>
        </MDBView>
    )
}

const styles={
    text:{
        
    }
}
export default Image
