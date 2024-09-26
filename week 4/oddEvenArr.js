let arr = [10];

let evenArr = [],
  oddArr = [];
for (i of arr) {
  if (i % 2 == 0) {
    evenArr.push(i);
  } else {
    oddArr.push(i);
  }
}

console.log(evenArr);
console.log(oddArr);
