const ENDPOINTS = {
  EVENTS: '/api/events'
};

const makeRequest = (endpoint) => {
  return fetch(endpoint)
    .then(response => response.json())
    .then(response => response.data)
    .catch(err => {
      console.error(err);
      throw err;
    });
};

const getEvents = () => makeRequest(ENDPOINTS.EVENTS);

export { getEvents };