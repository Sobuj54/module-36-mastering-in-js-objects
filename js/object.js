//  1. object literals
const player = {};
// setting properties of object
player.name = "sakib";
player.specialty = "all-rounder";
// setting a method
player.bat = function () {
  console.log("swing the bat");
};
//console.log(player);
// calling the method like function
//player.bat();

// ------------------------------>
// another way of making object
const student = {
  name: "sobuj",
  job: "student",
  read: function () {
    console.log("read regularly");
  },
  salary: 0,
};
//console.log(student);
// ----------------------->
// 2. object constructor
// this will give a new empty object
const person = new Object();
//console.log(person);

// ------------------------->
// object create method
//const item = Object.create(null);
const atel = Object.create(student);
//console.log(atel.job);

// ------------------->
// 4. class
class people {
  name = "sobuj";
  job = "student";
  constructor(age) {
    this.age = age;
  }
}
const people1 = new people(22);
console.log(people1);

// ---------------->
// 5. function
function car(model, price) {
  this.model = model;
  this.price = price;
}
const car1 = new car("elon", 2021);
console.log(car1);
