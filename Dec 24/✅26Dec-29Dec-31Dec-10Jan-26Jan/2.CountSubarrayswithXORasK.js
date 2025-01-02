const countsubarrayxorask = (arr, k) => {
  const n = arr.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let xor = 0;
    for (let j = i; j < n; j++) {
      xor ^= arr[j];
      if (xor === k) count++;
    }
  }

  return count;
};

console.log(countsubarrayxorask([4, 2, 2, 6, 4], 6));
