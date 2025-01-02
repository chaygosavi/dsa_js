const largestSubarr = (arr, target) => {
  const n = arr.length;
  let max = 0,
    sum = 0;

  const map = new Map();

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    console.log(sum);
    if (sum === target) {
      max = i + 1;
      console.log(max);
    } else {
      if (map.has(sum)) {
        max = Math.max(max, i - map.get(sum));
      } else {
        map.set(sum, i);
      }
    }
  }
  console.log(map);
  console.log(max);
};

console.log(largestSubarr([15, -2, -13, -8, 1, 7, 10, 23], 0));
