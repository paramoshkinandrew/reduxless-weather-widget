import React, { Component } from 'react';
import { WeatherWidget } from './WeatherWidget';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <WeatherWidget />
        <WeatherWidget geolocation={{ latitude: '34.052235', longitude: '-118.243683' }} />
        <WeatherWidget geolocation={{ latitude: '51.508530', longitude: '-0.076132' }} />
      </div>
    );
  }
}

export default App;
