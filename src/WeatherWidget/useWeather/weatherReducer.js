import {
  FETCH_FAILED,
  FETCH_FINISH,
  FETCH_START,
  SET_LOCATION,
  SET_WEATHER
} from "./weatherActions";

export const INITIAL_STATE = {
  loading: false,
  error: null,
  weather: null,
  location: null,
};

export const weatherReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_START:
      return { ...state, loading: true };
    case FETCH_FINISH:
      return { ...state, loading: false };
    case FETCH_FAILED:
      return { ...state, loading: false, error: payload };
    case SET_LOCATION:
      return { ...state, location: payload };
    case SET_WEATHER:
      return { ...state, weather: payload };
    default:
      return state;
  }
};
