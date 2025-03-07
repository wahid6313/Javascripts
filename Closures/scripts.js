"use strict";

// const bookings = [];

// const createBokking = function (
//   flightNum,
//   numPassanger = 1,
//   price = 200 * numPassanger
// ) {
//   numPassanger = numPassanger || 1;
//   price = price || 200;

//   const booking = {
//     flightNum,
//     numPassanger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
//   // console.log(bookings);
// };

// createBokking("lh123");
// createBokking("lh123",2);
// createBokking("lh123", 3);


///////////////////////////////////////////
////passing argument works-----------------
const flight = "LH123";
const wahid = {
  name: "wahid ali",
  passport: 12345678,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LJ231";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport == 12345678) {
    alert("cheked in");
  } else alert("wrong passport number");
};

// checkIn(flight, wahid);
// console.log(flight);
// console.log(wahid);

const newPasspost = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPasspost(wahid);
checkIn(flight, wahid);
