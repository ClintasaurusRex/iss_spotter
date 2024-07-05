const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(flyBys => {
    console.log('It worked! Returned flyover times:', flyBys);
  })
  .catch(error => {
    console.log("It didn't work!", error.message);
  });
