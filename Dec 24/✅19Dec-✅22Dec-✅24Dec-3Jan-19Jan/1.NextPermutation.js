// https://leetcode.com/problems/next-permutation/

var nextPermutation = function (arr) {
  const n = arr.length;

  let numToSwapIdx = -1;

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > arr[i - 1]) {
      numToSwapIdx = i - 1; // Because its greater than i - 1
      break;
    }
  }

  if (numToSwapIdx != -1) {
    let swapIdx = -1;

    for (let i = n - 1; i >= numToSwapIdx + 1; i--) {
      if (arr[i] > arr[numToSwapIdx]) {
        swapIdx = i;
        break;
      }
    }

    swap(numToSwapIdx, swapIdx);
  }

  reverse(numToSwapIdx + 1);

  function reverse(idx) {
    let start = idx,
      end = n - 1;

    while (start < end) {
      swap(start, end);
      start++;
      end--;
    }
  }

  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

//                           0  1  2  3  4
console.log(nextPermutation([1, 2, 3, 9, 5]));
