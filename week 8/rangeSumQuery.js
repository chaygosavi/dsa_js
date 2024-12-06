let prefix = [];

var NumArray = function (arr) {
  let n = arr.length,
    sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    prefix[i] = sum;
  }
};

NumArray.prototype.sumRange = function (left, right) {
  if (left === 0) return prefix[right];
  else return prefix[right] - prefix[left - 1];
};

// IMP

const obj = new NumArray([1, 2, 3, 4]);
console.log(obj.sumRange(0, 1));

// var obj = new NumArray([1, 2, 3, 4, 5]);
// console.log(obj.sumRange(0, 2)); // 6 (1 + 2 + 3)
// console.log(obj.sumRange(2, 4)); // 12 (3 + 4 + 5)
// console.log(obj.sumRange(1, 3)); // 9 (2 + 3 + 4)
