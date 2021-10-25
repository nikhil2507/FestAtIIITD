import React, { useState, useEffect } from "react";
import axios from 'axios';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ".././style.css";
import "./calendar.css";
import moment from "moment";

function CalendarApp() {
  const [value, onChange] = useState(new Date());
  const mark = ["04-04-2021", "03-04-2021", "05-04-2021"];

  let [date_arr, setDates] = useState([]);
  let [events, setEvents] = useState({});
  let flag = false;

  useEffect(()=>{
    getAllEventDates();
  },[])
//  useEffect(() => {
//   if(flag==false){
//     getAllEventDates();
//   }
  
//   if (events.length>0) {
//     flag=true
//     return;
//   }
  
//   },[]);

  const getAllEventDates = ()=>{
    axios.get('/api/event')
    .then((response)=>{
      const data = response.data;
      setEvents(data);
      console.log(events)
      console.log("Data received!");
    })
    .catch(()=>{
      console.log("Data wasn't received");
    });
  }

  const displayDates = (_events) => {
    if(!_events.length) {
      console.log('1')
      return null;}
    console.log(_events);
    const dates = _events.map((event,index)=>{
      
      var fromDate= event.startDate.replaceAll('-','/')
      var toDate= event.endDate.replaceAll('-','/')
      var start = moment(fromDate,"DD/MM/YYYY")
      var end = moment(toDate,"DD/MM/YYYY")
      // console.log(start.toDate())
      date_arr.push(start.format('DD-MM-YYYY'))
      while(start.format('DD-MM-YYYY')!== end.format('DD-MM-YYYY')){
        // console.log(start.format('DD-MM-YYYY'));
        start.add(1,'days');
        date_arr.push(start.format('DD-MM-YYYY'))
      }


      return(
        <tr className="upcoming_row" key={index}>
          <td className="upcoming_data">{event.name}</td>
          <td className="upcoming_data">{event.startDate}</td>
          <td className="upcoming_data">{event.endDate}</td>
        </tr>
      )
    });
    return dates;
  };

  return (
    <div style={{width:'100%',marginTop:'3rem'}}>
      <div style={{display:'flex'}}>
        <div className="upcoming">
              {/* Table? */}
              <table className="upcoming_table">
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                  </tr>
                </thead>
                {displayDates(events)}
              </table>
            </div>
          <div>
        </div>
        <div>
          <Calendar className='calendar-app'
            onChange={onChange}
            value={value}
            tileClassName={({ date, view }) => {
              if (date_arr.find((x) => (x === moment(date).format("DD-MM-YYYY") && x !== moment().format("DD-MM-YYYY") )) ) {
                return "highlight";
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CalendarApp;