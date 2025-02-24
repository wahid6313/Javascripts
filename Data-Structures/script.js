"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],

  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Caprese Salad"],

  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
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
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `orderreceived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};









/*
///////////////////////////////////////////////
////DESTRUCTURINGS OBJECTS----------------------
//////////////////////////////////////////////

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
//////////////////////////////////////////////


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
