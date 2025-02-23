"use strict";

// function scope-------------------
function calAge(birthdate) {
  const age = 2000 - birthdate;
  console.log(firstName);

  function printAge() {
    const output = `you are in ${age} born in ${birthdate}`;
    console.log(output);

    //block scope-------------------
    if (birthdate >= 1800 && birthdate <= 1906) {
      var millenial = true;
      const firstName = "raza";
      const str = `oh you are a millenial, ${firstName}`;
      console.log(str);
    }
    //does not access outside because it is block scope;
    // console.log(str); 

    //var is a function scope not a block scope;
    console.log(millenial); 
  }
  printAge();
  return age;
}


// global scope --------------------
const firstName = "wahid ali----";
calAge(1900);

//reference error-----------------
// console.log(age);
// printAge();
