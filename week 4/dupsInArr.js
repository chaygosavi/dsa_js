let arr = [1, 1, 2, 3, 4, 4],
  count = 0;

const maxNum = Math.max(...arr);

let freqArr = Array(maxNum + 1).fill(0);

for (let i = 0; i < arr.length; i++) {
  freqArr[arr[i]]++;
}

for (let num of freqArr) {
  if (num > 1) {
    count++;
  }
}

console.log(count);
