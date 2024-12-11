const intersectionArr = (arr1, arr2) => {
  let n1 = arr1.length,
    n2 = arr2.length,
    i = 0,
    j = 0,
    ans = [];

  while (i < n1 && j < n2) {
    if (arr1[i] === arr2[j]) {
      ans.push(arr1[i]);
      i++, j++;
    } else if (arr1[i] >= arr2[j]) {
      j++;
    } else i++;
  }

  console.log(ans);
};

intersectionArr([1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7]);
