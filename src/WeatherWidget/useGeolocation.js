import React from 'react';

const SF_LOCATION = { latitude: 37.773972, longitude: -122.431297 };

const getGeolocation = () => {
  return new Promise((res) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => res(coords));
    } else {
      // Fallback is San Francisco
      res(SF_LOCATION);
    }
  })
};

export const useGeolocation = () => {
  const [geolocation, setGeolocation] = React.useState(null);

  React.useEffect(() => {
    getGeolocation().then(setGeolocation);
  }, []);

  return geolocation;
};
