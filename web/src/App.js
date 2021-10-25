import {useState,useEffect} from 'react';
import { Layout, Container, Button, Col, Row } from "react-bootstrap"; //boostrap classes
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Dashboard from './components/Dashboard';
// import CalendarTry from './components/CalendarTry';
import CalendarApp from './components/CalendarApp';
// import Header from "./components/Header";
import Esya from "./components/Esya";
import Induction from "./components/Induction";
import Odyssey from "./components/Odyssey";
import Home from "./components/Home";
import Notifications from "./components/Notifications";
import InfoForm from "./components/Form";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MyNavbar from './components/MyNavbar';
import FormEvent from './components/FormEvent';
import Nav from './components/Nav';
import Admin from './components/Admin';
import Started from './components/Started';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      author: "Design - OT",
      body: "Design volunteers, please assemble near OAT",
      date: "2021-05-15 at 10:45"
    },
    {
      id: 2,
      author: "ECE - OC ",
      body: "We will start with our briefing in 5 mins. Please join.",
      date: "2021-05-19 at 13:20"
    },
    {
      id: 3,
      author: "OC",
      body: "Please fill the form for your OT t-shirts",
      date: "2021-05-21 at 15:30"
    },
  ]);

  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await axios({
        url: "api/user",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      const content = await response.data;
      console.log(content.name);
      setName(content.name);
    })();
  });

  // Add announcement
  const addAnnouncement = (notification) => {
    const id = notifications.length + 1;
    const newNotification = { id, ...notification };
    setNotifications([...notifications, newNotification]);
  };

  const footfallDataPoints=[
    { y: 6000, label: "2016" },
    { y: 8500, label: "2017" },
    { y: 7200, label: "2018" },
    { y: 10000, label: "2019"},
  ]

  const eventDataPoints=[
    { y: 30, label: "PWNED" },
    { y: 24, label: "PUBG" },
    { y: 10, label: "Robo Wars" },
    { y: 8, label: "2019"},
  ]
  return (
    <Router>
     
        <Nav name={name} setName={setName} />
      
      <Switch>
        {/* <Route path="/" exact component={() => <Started name={name} />} /> */}
        <Route path="/login" component={() => <Login setName={setName} />} />
        <Route path="/register"  component={Register} />
        {/* <Route path ="/try" exact component={MyNavbar} /> */}
        <Route path="/induction" exact component={Induction}/>
        <Route path="/admin" exact component={Admin}/>
        <Route path ="/event-save" exact component={FormEvent} />
        <Route path="/" exact component={() => <Home name={name} />} />
        <Route path="/odyssey" exact component={Odyssey}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/esya" exact component={Esya} />
        <Route path="/odyssey/notifications" exact component={() => <Notifications notifications={notifications} 
        addNotification={addAnnouncement} />}/>
        <Route path="/esya/notifications" exact component={() => <Notifications notifications={notifications} 
        addNotification={addAnnouncement} />}/>
        <Route path="/induction/notifications" exact component={() => <Notifications notifications={notifications} 
        addNotification={addAnnouncement} />}/>
        <Route path='/calendar' exact component={CalendarApp} />
        <Route path='/form' exact component={InfoForm} />
      </Switch>
      
      {/* <Stats header="Campus Footfall" type="line" dataPoints={footfallDataPoints} />
      <Stats header="Popular Events" type="column" label="Teams" dataPoints={eventDataPoints} />
      */}
      {/* <Notifications 
        notifications={notifications}
        addNotification={addAnnouncement}
      /> */}

    </Router>
  );
}


export default App;