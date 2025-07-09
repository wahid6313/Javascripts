"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

//

//

///////////////////////////////////////
//////// NAMASTEY JAVASCRIPTS /////////

// PROMISES----
//////////////// promise is an object which represents to eventual completion of an asynchronous operations.

/*
const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfp) {
    show0rderSummary(paymentInfp, function () {
      updateWalletBalance();
    });
  });
});

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfp) {
    return show0rderSummary(paymentInfp);
  })
  .then(function () {
    return updateWalletBalance();
  });
*/

/*
// creating the promise ----

const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart);
// console.log(promise);

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => console.log(paymentInfo))
  .catch((err) => console.log(err.message)); //ataching a failure callback function using catch to a promise object

/// producer.
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    // logic for create order.
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("payment successfully");
  });
}

function validateCart(cart) {
  return true;
}
*/

/*
const image_API =
  "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D";

const user = fetch(image_API);
console.log(user);

user.then(function (data) {
  console.log(data);
});
*/

///////////////////////////////////////
// ASYNCHRONOUS WAIT----

/**
 * What is async?
 * What is await ?
 * How async await works behind the scenes?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promise.then/.catch
 *
 * In promise me js engine wait nahi karega resolved hone me wo next line code execute karega but in async await me js engine wait karega promise resolve hone me uske baad next line code execute karega 🙂.
 */

/*
// // always return a promise

const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("promise resolve success2");
  }, 10000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("promise resolve success2");
  }, 20000);
});

async function handlePromise() {
  console.log("world");

  const val = await p;
  console.log("hello world");
  console.log(val);

  const val2 = await p2;
  console.log("hello world");
  console.log(val2);
}
handlePromise();

// function getData() {
//   p.then((res) => console.log(res));
//   console.log("hello world");
// }

// getData();
*/

// Fetch-------
const API_url = "https://api.github.com/users/wahid6313";

async function handlePromise() {
  const data = await fetch(API_url);
  setTimeout(function () {
    console.log("hello world");
  }, 3000);
  const jsonValue = await data.json();
  console.log(jsonValue);

  // fetch().then(res => res.json()).then(res => console.log);
  // fetch() => response.json() => jsonVlaue
}
handlePromise().catch((err) => console.log(err));
