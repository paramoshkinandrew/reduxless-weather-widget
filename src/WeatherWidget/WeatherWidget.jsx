import * as React from 'react';
import { useGeolocation } from './useGeolocation';
import { useWeather } from "./useWeather";

export const WeatherWidget = () => {
  const geolocation = useGeolocation();
  const state = useWeather(geolocation);

  return (
    <div>{JSON.stringify(state)}</div>
  );
};
