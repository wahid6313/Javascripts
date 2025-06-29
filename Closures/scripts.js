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

// ///////////////////////////////////////////
// ////passing argument works-----------------
// const flight = "LH123";
// const wahid = {
//   name: "wahid ali",
//   passport: 12345678,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LJ231";
//   passenger.name = "Mr." + passenger.name;

//   if (passenger.passport == 12345678) {
//     alert("cheked in");
//   } else alert("wrong passport number");
// };

// // checkIn(flight, wahid);
// // console.log(flight);
// // console.log(wahid);

// const newPasspost = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };
// newPasspost(wahid);
// checkIn(flight, wahid);

///////////////////////////
//AKSHAY SAINI--------------
///////////////////////////

/*. NOTES-----
bind a function in a lexical scope is closure--
*/

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   a = 34;
//   return y;
// }
// var z = x();
// console.log(z);
// z();

// function a() {
//   var x = 12;
//   function b() {
//     var y = 13;
//     function c() {
//       console.log(y, x);
//     }
//     y = 100;
//     c();
//   }
//   b();
// }
// a();

//set timeout-----------------------
//let is a block scope and it creates a new copy everytime while loop is executed. and var is a function scoped.

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("javascripts");
// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }
//   console.log("javascripts");
// }
// x();

// function counter() {
//   var count = 0;
//   return function incrementcounter() {
//     count++;
//     console.log(count);
//   };
// }
// var counter1 = counter();
// counter1();

//through constructor---
function Counter() {
  var count = 0;
  this.incrementCount = function () {
    count++;
    console.log(count);
  };
  this.decrementCount = function () {
    count--;
    console.log(count);
  };
}
var counter1 = new Counter();
counter1.incrementCount();
counter1.incrementCount();
counter1.incrementCount();

counter1.decrementCount();
