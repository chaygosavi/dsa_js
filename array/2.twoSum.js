var twoSum = function (arr, target) {
  const n = arr.length;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    if (map.has(target - arr[i])) {
      return [map.get(target - arr[i]), i];
    } else map.set(arr[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
