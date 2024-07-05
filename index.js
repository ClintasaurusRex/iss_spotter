

const { fetchCoordsByIP, fetchISSFlyOverTimes, fetchMyIP } = require("./iss");




// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
 

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('184.66.20.83', (error, coordinates) => {
//   if (error) {
//     console.log("Failed to fetch coordinates: ", error);
//     return;
//   }

//   console.log("Coordinates are:", coordinates);
// });

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error,
//   flyBys) => {
//   if (error) {
//     console.log("Failed to fetch flyBy times: ", error);
//     return;
//   }

//   console.log("flyby times are:", flyBys);

// });
// // const ip = '162.245.144.188';

