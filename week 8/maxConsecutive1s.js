var findMaxConsecutiveOnes = function (arr) {
  let count = 0,
    max = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    max = Math.max(count, max);
  }

  console.log(max);
};

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
