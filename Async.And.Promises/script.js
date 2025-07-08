"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
//////// NAMASTEY JAVASCRIPTS /////////

/**
 * What is async?
 * What is await ?
 * How async await works behind the scenes?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promise.then/.catch
 */

// always return a promise
async function getData() {
  return "namastey";
}

const data = getData();
console.log(data);
