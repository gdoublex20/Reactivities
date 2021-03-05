import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios'
import { Container, Header, List } from 'semantic-ui-react';
import './App.css';
import ActivityDashboard from './ActivityDashboard'

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/Activities').then(response =>{
      console.log(response);
      setActivities(response.data)
    })
  }, [])

  return (
    <>
        <Container style={{marginTop: '7em'}}>
          <ActivityDashboard activities={activities}/>
        </Container>
    </>
  );
}

export default App;
