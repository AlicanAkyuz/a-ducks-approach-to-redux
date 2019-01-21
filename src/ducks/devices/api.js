import axios from 'axios';

export function getDevices() {
  return Promise.all([
    axios.get('http://localhost:3004/eu-devices'),
    axios.get('http://localhost:3004/us-devices')
  ])
  .then(function(response) {
    const values = response[0].data.concat(response[1].data);
    return values
  })
  .catch(error => {
    throw error
  });
}

export function getAvailability() {
  return Promise.all([
    axios.get('http://localhost:3004/eu-availability'),
    axios.get('http://localhost:3004/us-availability')
  ])
  .then(function(response) {
    return response[0].data.concat(response[1].data)
  })
  .catch(error => {
    throw error
  })
};
