export const FETCH_START = 'FETCH_START';
export const FETCH_FINISH = 'FETCH_FINISH';
export const FETCH_FAILED = 'FETCH_FAILED';

export const SET_LOCATION = 'SET_LOCATION';
export const SET_WEATHER = 'SET_WEATHER';

export const fetchStart = () => ({ type: FETCH_START });
export const fetchFinish = () => ({ type: FETCH_FINISH });
export const fetchFailed = () => ({ type: FETCH_FAILED });

export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: location
});

export const setWeather = (weather) => ({
  type: SET_WEATHER,
  payload: weather
});


