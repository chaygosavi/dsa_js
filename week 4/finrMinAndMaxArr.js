let arr = [4, 3, 6, 5, 1, 9, 8],
  max = arr[0],
  min = Infinity;

for (let num of arr) {
  if (num > max) {
    max = num;
  }
}

for (let num of arr) {
  if (num < min) {
    min = num;
  }
}

console.log(max, min);
