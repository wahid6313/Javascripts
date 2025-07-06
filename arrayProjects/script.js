"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// BALANCE HISTORY-----
const displaMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  // .textContent = 0;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov} ₹</div>
        </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// CURRENT BALANCE-----
const calcDisplayMovements = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} INR`;
};

// IN AND OUT AND INTEREST BALANCE------
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}₹`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((mov, acc) => mov + acc, 0);
  labelSumOut.textContent = `${Math.abs(out)}₹`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposits) => (deposits * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((int, acc) => int + acc, 0);
  labelSumInterest.textContent = `${interest}₹`;
};

// UPDATE UI----
const updateUi = function (acc) {
  // DISPLAY MOVEMENTS--
  displaMovements(acc.movements);

  // DISPLAY BALANCE--
  calcDisplayMovements(acc);

  // DISPLAY SUMMARY--
  calcDisplaySummary(acc);
};

// USERNAME------
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0]) //map(function(name) {return name[0]})
      .join("");
  });
};
createUserNames(accounts);
// console.log(accounts);

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // CLEAR--
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUi(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUi(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.userName == currentAccount.userName
    );
    console.log(index);

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  displaMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// //FOR EACH-------

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: you deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: you withdraw ${Math.abs(mov)}`);
//   }
// });

// // MAP-----------
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const euroToUsd = 1.1;

// const convertUsd = movements.map((mov) => euroToUsd * mov);
// console.log(movements);
// console.log(convertUsd);

// const movementDiscription = movements.map(
//   (mov, i) =>
//     `Movements ${i + 1}: you ${mov > 0 ? "deposited" : "withdraw"} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementDiscription);

// // FILTER ---------------
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// // REDUCE ---------------
// //accumulator == SNOWBALL;
// const balance = movements.reduce((acc, mov) => acc + mov, 0);
// console.log(balance);

// // maximum
// const maximum = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// });
// console.log(maximum);

// const euroToUsd = 1.1;

// // PIPELINE
// const totalBalace = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalBalace);

// // FIND ----------
// const firstWithdrawl = movements.find((mov) => mov < 0);
// console.log(movements);
// console.log(firstWithdrawl);

// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);

// console.log(movements);
// console.log(movements.includes(-130));

// const anydeposits = movements.includes((mov) => mov > 0);
// console.log(anydeposits);

// const deposits = (mov) => mov > 0;
// console.log(movements.some(deposits));
// console.log(movements.every(deposits));
// console.log(movements.filter(deposits));

// FLAT ------------
const overAllBalance = accounts
  .map((mov) => mov.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overAllBalance);

// FLAT MAP --------
const overAllBalance2 = accounts
  .flatMap((mov) => mov.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overAllBalance2);

movements.sort((a, b) => a - b);
console.log(movements);
