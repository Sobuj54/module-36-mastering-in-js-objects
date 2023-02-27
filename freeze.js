const bottle = { color: "yellow", price: 100, isClean: true, capacity: 1 };
// getting properties from an object
const keys = Object.keys(bottle);
//console.log(keys);
// getting property values from an object
const values = Object.values(bottle);
//console.log(values);
// getting both property and property value in a pair
const pair = Object.entries(bottle);
//console.log(pair);

// --------------------------->
console.log(bottle);
//if we use seal then we can not delete any property or add any property but we can update property values
Object.seal(bottle);
// if we use freeze then we can not add or delete any property also can not update any property value
Object.freeze(bottle);
bottle.price = 500;

// using delete we can delete an property
delete bottle.isClean;
console.log(bottle);
