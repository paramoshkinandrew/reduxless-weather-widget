import * as React from 'react';
import { WeatherProvider } from './useWeather';
import { WeatherWidget } from './WeatherWidget';

export const WeatherWidgetWithProvider = React.memo(() => (
  <WeatherProvider>
    <WeatherWidget />
  </WeatherProvider>
));
