import * as React from 'react';
import { useGeolocation } from './useGeolocation';
import { useWeather } from './useWeather';
import { padStart } from "./utils/padStart";
import { Loader } from './Loader';
import './weatherWidget.css';

export const WeatherWidget = React.memo(({ geolocation: passedGeolocation }) => {
  const geolocation = passedGeolocation || useGeolocation();
  const { weather, location, loading, error } = useWeather(geolocation);

  return (
    <div className="weather-widget">
      {loading && (
        <Loader className="weather-widget__loader" />
      )}
      {(!loading && error) && (
        <p>An error occurred during update</p>
      )}
      {(location && weather && !loading) && (
        <div className="weather-widget__location-name">
          {location['ParentCity']['LocalizedName']}
          <br />
          {location['LocalizedName']}
        </div>
      )}
      {weather && (
        <React.Fragment>
          <img
            className="weather-widget__weather-icon"
            src={`https://developer.accuweather.com/sites/default/files/${padStart(weather['WeatherIcon'], 2, '0')}-s.png`}
            alt={weather['WeatherText']}
          />
          <div className="weather-widget__weather-description">
            {weather['WeatherText']}
          </div>
          <div className="weather-widget__temperature">
            {weather['Temperature']['Metric']['Value']} °{weather['Temperature']['Metric']['Unit']}
          </div>
        </React.Fragment>
      )}
    </div>
  );
});
