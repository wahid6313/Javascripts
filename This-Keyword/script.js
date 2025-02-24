"use strict";

// console.log(this);

// const calAge = function (birhtyear) {
//   console.log(2000 - birhtyear);
// //   console.log(this);
// };
// calAge(1900);

// const calArrrow = (birhtyear) => {
//   console.log(2000 - birhtyear);
// //   console.log(this);
// };
// calArrrow(1950);

// ///-------------------------
// const wahid = {
//   year: 2004,
//   ObejectAge: function () {
//     // console.log(this);
//     console.log(2020 - this.year);
//   },
// };
// wahid.ObejectAge();

// //--------------------------
// const matilda = {
//     year: 2000,
// }

// matilda.ObejectAge = wahid.ObejectAge;
// matilda.ObejectAge();

// //when you direct function call ,no owner of this function it cought error ;
// //just like given example;

// // const f = wahid.ObejectAge;
// // f();

//-----------------------------------------------

// REGULAR FUNCTION VS ARROW FUNCTION;

// const wahid = {
//   firstName: "wahid",
//   year: 2000,
//   ObejectAge: function () {
//     //   console.log(this); //function return------
//     console.log(2020 - this.year);

//     //--------------------------------
//     //-----SOLUTION 1 -------------
//     const self = this;
//     const isMilleniel = function () {
//       console.log(self);
//       console.log(self.year >= 1900 && self.year <= 2050);
//     };

//     //--------------------------------
//     // -------- SOLUTION 2 -----------
//     const isMilleniels = () => {
//       console.log(this);
//       console.log(this.year >= 2010 && this.year <= 2050);
//     };

//     isMilleniel();
//     isMilleniels();
//   },

//   greet: () => {
//     // console.log(this); //window function---------
//     console.log(`hey i am ${this.firstName}`);
//   },
// };

// wahid.greet();
// wahid.ObejectAge();

//---------SHALLOW COPYING-------
const test = {
  firstName: "wahid",
  lastName: "ali",
  family: ["waihd", "ali"],
};

// const testCopy = { ...test };
// testCopy.lastName = "raza";

// testCopy.family.push("sidhant");
// testCopy.family.push("yuvraj");

// console.log("before: ", test);
// console.log("after: ", testCopy);

//-------DEEP COPYING / CLONE----
const testClone = structuredClone(test);

testClone.family.push("sidhant");
testClone.family.push("yuvraj");

console.log("original : ", test);
console.log("clone : ", testClone);
