function mergeTwoSortedArrs(arr1, arr2) {
  let i = 0,
    j = 0,
    n = arr1.length,
    m = arr2.length,
    ans = [];

  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }

  while (i < n) {
    ans.push(arr1[i]);
    i++;
  }
  while (j < m) {
    ans.push(arr2[j]);
    j++;
  }
  console.log(ans);
}

mergeTwoSortedArrs([1, 3, 5, 8], [2, 6, 10]);
