// looping through an array
const numbers = [10, 25, 45, 2, 36];
// for (const number of numbers) {
//   console.log(number);
// }

// we can not use for of loop to iterate an object
const bottle = { color: "yellow", price: 100, isClean: true, capacity: 1 };
// first option to loop through an object
const keys = Object.keys(bottle);
//console.log(keys);
/*
3 ways to read object properties
---1. bottle.color
---2. bottle['color']
---3. bottle[key] beacuse in this case we stored property in key variable
*/
for (const key of keys) {
  //console.log(key, bottle[key]);
}

// for in loop
// for in loop is used directly used in object
for (const key in bottle) {
  console.log(key, bottle[key]);
}

// advanced
const pair = Object.entries(bottle);
console.log(pair);

for (const [key, value] of Object.entries(bottle)) {
  console.log(key, value);
}
