const API_KEY = 'bVHwskmV3Z2RO1SqjGRatgASYjahXi3k';

export const getLocation = ({ latitude, longitude }) => fetch(
  `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`
).then(res => res.json());

export const getWeather = (key) => fetch(
  `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API_KEY}`
).then(res => res.json());


