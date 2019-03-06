import React from "react";
import { WeatherDispatchContext, WeatherStateContext } from "./WeatherProvider";
import { fetchFailed, fetchFinish, fetchStart, setLocation, setWeather } from './useWeatherActions';
import { getLocation, getWeather } from "./accuWeatherService";

export const useWeather = (geolocation) => {
  const state = React.useContext(WeatherStateContext);
  const dispatch = React.useContext(WeatherDispatchContext);

  // NOTE [Andrew_Paramoshkin] 6/3/2019 Request weather on geolocation changed
  React.useEffect(() => {
    if (geolocation && geolocation.latitude && geolocation.longitude) {
      dispatch(fetchStart());
      getLocation(geolocation)
        .then((location) => {
          dispatch(setLocation(location));
          return getWeather(location['Key']);
        })
        .then(([weather] = []) => dispatch(setWeather(weather)))
        .then(() => dispatch(fetchFinish()))
        .catch((e) => dispatch(fetchFailed(e)));
    }
  }, [geolocation, dispatch]);

  return state;
};
