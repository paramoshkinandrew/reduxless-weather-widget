import * as React from 'react';
import { WeatherProvider } from './useWeather';
import { WeatherWidget } from './WeatherWidget';

export const WeatherWidgetWithProvider = React.memo(({ geolocation }) => (
  <WeatherProvider>
    <WeatherWidget geolocation={geolocation} />
  </WeatherProvider>
));
