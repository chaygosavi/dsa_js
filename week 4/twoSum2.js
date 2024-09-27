var twoSum2 = function (arr, target) {
  let result = [-1, -1],
    i = 0,
    j = arr.length - 1;

  while (i <= j) {
    let currSum = Math.floor(arr[i] + arr[j]);

    if (currSum === target) {
      return [i, j];
    } else if (currSum > target) {
      j--;
    } else {
      i++;
    }
  }
  return result;
};

twoSum([3, 2, 4], 6);
