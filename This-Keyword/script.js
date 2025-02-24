"use strict";

console.log(this);

const calAge = function (birhtyear) {
  console.log(2000 - birhtyear);
//   console.log(this);
};
calAge(1900);

const calArrrow = (birhtyear) => {
  console.log(2000 - birhtyear);
//   console.log(this);
};
calArrrow(1950);


///-------------------------
const wahid = {
  year: 2004,
  ObejectAge: function () {
    // console.log(this);
    console.log(2020 - this.year);
  },
};
wahid.ObejectAge();

//--------------------------
const matilda = {
    year: 2000,
}

matilda.ObejectAge = wahid.ObejectAge;
matilda.ObejectAge();

//when you direct function call ,no owner of this function it cought error ;
//just like given example;

// const f = wahid.ObejectAge;
// f();
