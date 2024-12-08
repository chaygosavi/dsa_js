const secLargestFn = (arr) => {
  let largest = arr[0],
    secLargest = -1,
    n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i] > largest) {
      secLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secLargest && arr[i] < largest) {
      secLargest = arr[i];
    }
  }
  console.log("secLargest", secLargest);
  return secLargest;
};

const secSmallestFn = (arr) => {
  let smallest = arr[0],
    secSmallest = Infinity,
    n = arr.length;

  for (let i = 1; i < n; i++) {
    if (arr[i] < smallest) {
      secSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secSmallest && arr[i] > smallest) {
      secSmallest = arr[i];
    }
  }

  return secSmallest;
};

const secondLargest = (arr) => {
  const secLargest = secLargestFn(arr);
  const secSmallest = secSmallestFn(arr);
  return [secLargest, secSmallest];
};

console.log(secondLargest([1, 2, 3, 9, 10, 11, 11]));
