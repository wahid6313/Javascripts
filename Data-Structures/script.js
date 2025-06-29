"use strict";

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],

  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Caprese Salad"],

  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `orderreceived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

//string part 2 --------------
const airline = "air india";
console.log(airline.toLocaleUpperCase());

console.log(airline.split(" "));

const capitilized = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitilized("wahid ali");
capitilized("sahiba siddiqui");
capitilized("raza");

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "#");
};

console.log(maskCreditCard(7632353));
console.log(maskCreditCard(873674563246746245));
console.log(maskCreditCard("652346235672523546735623"));

const planeInLine = function (n) {
  console.log(`there are ${n} planes in line ${"✈️".repeat(n)}`);
};

planeInLine(5);
planeInLine(3);
planeInLine(12);

// //string part 1 -------------
// const airline = "air india";
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// const checkPlaneSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s == "B" || s == "E") console.log("You got a middle seat 😫");
//   else console.log("You are a lucky cham 😍😃😃😃😃😃😃");
// };

// checkPlaneSeat("11B");
// checkPlaneSeat("20C");
// checkPlaneSeat("21E");

// //maps advance----------------------
// const questions = new Map([
//   ["question", "what is the best programming language in the world"],
//   [1, "c"],
//   [2, "java"],
//   [3, "javascripts"],
//   ["correct", 3],
//   [true, "correct 👍"],
//   [false, "try again !"],
// ]);

// console.log(questions);
// console.log(Object.entries(openingHours));
// const newMap = new Map(Object.entries(openingHours));
// console.log(newMap);

// ////////quiz app
// console.log(questions.get("question"));
// for (const [key, value] of questions) {
//   if (typeof key === "number") console.log(`Answer ${key} : ${value}`);
// }

// // const answer = Number(prompt("your answer"));
// const answer = 3;
// console.log(answer);
// console.log(questions.get(questions.get("correct") === answer));

// //convert map to array
// console.log([...questions]);

// //maps fundamentals------------------------
// const rest = new Map();
// rest.set("name", "dominos");
// rest.set(1, "wahid , ali");
// console.log(rest.set(2, "ali, wahid"));

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "we are open: D")
//   .set(false, "we aer close: (");

// console.log(rest.get("name"));
// console.log(rest.get(1));

// const time = 3;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// function x() {
//   var a = 6;

//   function y() {
//     console.log(a);
//   }
//   var a = 100;
//   return y;
// }

// var z = x();
// console.log(z);
// z();

// //optional chaining---------
// console.log(restaurant.openingHours.mon?.open);

// const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
//   // console.log(day);
// }

// console.log(restaurant.order?.(0, 1) ?? "method does not exist");
// console.log(restaurant.orderRositto?.(0, 1) ?? "method does not exist");

// //prperties Name----------------
// const properties = Object.keys(openingHours);
// console.log(properties);

// let opeStr = `we are open at ${properties.length} days: `;
// for (const day of properties) {
//   opeStr += `${day}, `;
// }
// console.log(opeStr);

// //properties value----------------
// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

// //set-----------------------------
// const orderSet = new Set([
//   "pizza",
//   "pizza",
//   "burger",
//   "chowmin",
//   "noodles",
//   "noodles",
//   "chowmin",
//   "burger",
// ]);
// console.log(orderSet);

// console.log(new Set("wahid"));
// console.log(orderSet.size);

// const staff = ["waiter", "chef", "manager", "waiter", "chef"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// // ///FOR OF LOOP--------------
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   // console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
/*
/////////////////////////////////////////////////
//NULISH COLASHING OPERATOR---------------------

restaurant.guestoption = 0;
const guest2 = restaurant.guestoption || 20;
console.log(guest2);

//NULLISH: null and undefined-------------------
const newGuest = restaurant.guestoption ?? 30;
console.log(newGuest);
*/

/*
/////////////////////////////////////////////////
//SHORT CIRCUITUNG------------------------------

console.log(0 || null || "wahid" || 20);
console.log(0 && null && "wahid" && 20);

// restaurant.guestoption = 23;
const guest1 = restaurant.guestoption ? restaurant.guestoption : 10;
console.log(guest1);

const guest2 = restaurant.guestoption || 20;
console.log(guest2);

const guest3 = restaurant.guestoption && 20;
console.log(guest3);
*/

/*
/////////////////////////////////////////////////
////REST PATTERN AND PARAMETERS-------------------

const [pizza, , rositto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rositto, otherFood);

//objects--
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//function---
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(2, 3, 4, 5);
add(2, 3, 4, 5, 6, 7, 8, 9);

const x = [5, 14, 44];
add(...x);

restaurant.orderPizza("mushrooms", "onions", "spanish", "olives");

*/

/*
///////////////////////////////////////
//SPREAD OPERATOR --------------------


const arr = [7, 8, 9];
const badNewArr = [2, 3, arr[0], arr[2]];
console.log(badNewArr);

//join two arrays----
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = "wahid";
const letters = [...str, " ", "ali"];
console.log(letters);
console.log(...str);
*/

/*
///////////////////////////////////////////////
////DESTRUCTURINGS OBJECTS----------------------


restaurant.orderDelivery({
    time: "22:40",
    address: "casa grand colony",
    starterIndex: 2,
    mainIndex: 2,
  });

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

//default values--------
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables----
let a = 12;
let b = 30;

const obj = { a: 2, b: 4, c: 8 };
({ a, b } = obj);
console.log(a, b);

//nested objects--------
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
///////////////////////////////////////////////
////DESTRUCTURINGS ARRAYS----------------------



const arr = [2, 3, 4];

const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z);

let [first, second] = restaurant.categories;
console.log(first, second);

//swithcing the value---------
[second, first] = [first, second];
console.log(first, second);

//receive 2 return a value from function------
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//NESTED destructuring-------
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//DEFAULT value--------------
const [p, q, r] = [8, 9];
console.log(p, q, r);
*/
