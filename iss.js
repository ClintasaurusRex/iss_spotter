

const needle = require("needle");

const fetchMyIP = function(callback) {

  const url = 'https://api.ipify.org?format=json';

  needle.get(url, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    if (response.statusCode !== 200) { // if non-200 status, assume server error
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    
    const ip = body.ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  
  const url = `http://ipwho.is/${ip}`;

  needle.get(url, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }

    //const parsedBody = JSON.parse(body);

    if (!body.success) {
      const message = `Success status was ${body.success}. Server message says: ${body.message} when fetching for IP ${body.ip}`;
      callback(Error(message), null);
      return;
    }

    const coordinates = {
      latitude: body.latitude,
      longitude: body.longitude,
    };

    callback(null, coordinates);
    // callback(null, ip);
  });
};








module.exports = { fetchMyIP, fetchCoordsByIP };