import * as React from 'react';
import { INITIAL_STATE, weatherReducer } from './weatherReducer';

export const WeatherStateContext = React.createContext(INITIAL_STATE);
export const WeatherDispatchContext = React.createContext(e => e);

export const WeatherProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(weatherReducer, INITIAL_STATE);

  return (
    <WeatherStateContext.Provider value={state}>
      <WeatherDispatchContext.Provider value={dispatch}>
        {children}
      </WeatherDispatchContext.Provider>
    </WeatherStateContext.Provider>
  )
};
