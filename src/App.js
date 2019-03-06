import React, { Component } from 'react';
import { WeatherWidget } from './WeatherWidget';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <WeatherWidget />
      </div>
    );
  }
}

export default App;
