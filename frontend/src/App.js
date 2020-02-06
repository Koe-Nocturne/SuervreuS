import React from 'react';
import './App.css';
import Landingpage from './Components/landingpage';

const API_URL = 'http://localhost:5000';

class App extends React.Component {

  render() {
    return (
      <Landingpage/>
    );
  }
}

export default App;
