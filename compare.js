const first = { a: 2, b: 3, c: 4 };
const second = { a: 3, c: 4, b: 3 };

// compare two objects
function compareObject(first, second) {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys.length === secondKeys.length) {
    for (const key of firstKeys) {
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
const isEqual = compareObject(first, second);
console.log(isEqual);
