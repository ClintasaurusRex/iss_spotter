// refactor the code to use promises
const needle = require('needle');
// looking for the Ip in the API

const fetchMyIP = function() {
  const url = 'https://api.ipify.org?format=json';

  return new Promise((resolve, reject) => {
    needle.get(url, (error, response, body) => {
      if (error) {
        reject(error);
        return;
      }
      if (response.statusCode !== 200) { // if non-200 status, assume err
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        reject(Error(msg));
        return;
      }
      
      resolve(body.ip);
    });
  });
};

// look for coords using ip and check for success

const fetchCoordsByIP = function(ip) {
  const url = `http://ipwho.is/${ip}`;
  
  return new Promise((resolve, reject) => {
    needle.get(url, (error, response, body) => {
      if (error) {
        reject(error);
        return;
      }

      if (!body.success) {
        const message = `Success status was ${body.success}. Server message says: ${body.message} when fetching for IP ${body.ip}`;
        reject(Error(message));
        return;
      }

      const coordinates = {
        latitude: body.latitude,
        longitude: body.longitude,
      };

      resolve(coordinates);
    });
  });
};

//FlyBy times
const fetchISSFlyOverTimes = function(coords) {
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

  return new Promise((resolve, reject) => {
    needle.get(url, (error, response, body) => {
      if (error) {
        reject(error);
        return;
      }
      if (response.statusCode !== 200) {
        reject(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`));
        return;
      }
      resolve(body.response);
    });
  });
};

// ISS FLYBY schedule (puttining all together)
const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(ip => fetchCoordsByIP(ip))
    .then(coords => fetchISSFlyOverTimes(coords));
    
};


      
module.exports = { nextISSTimesForMyLocation };
