import React from 'react'
import {Container,Row} from 'react-bootstrap';
import CanvasJSReact from './canvasjs.react';
function Stats({header, label, type, dataPoints}){

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: header //Variable Header
        },
        axisY:{
            gridThickness:0,
            includeZero:true,
        },
        data: [{
            type: type, //Variable Type
            indexLabel: "{y} " + label,		
            startAngle: -90,
            dataPoints: dataPoints //Variable data points
        }]
    };

    return (
        <Container style={styles.container}>
            <CanvasJSReact.CanvasJSChart options={options} />
        </Container>
    )
}
const styles={
    container:{
        padding: "1rem 0 1rem 0 "
    }
    
}

Stats.defaultProps = {
    label:""
}
export default Stats
