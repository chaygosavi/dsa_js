// const findUnion = (arr1, arr2) => {
//   console.log(Array.from(new Set([...arr1, ...arr2])).sort((a, b) => a - b));
// };

const findUnion = (arr1, arr2) => {
  let n1 = arr1.length,
    n2 = arr2.length,
    i = 0,
    j = 0,
    ans = [];

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      if (ans.length === 0 || ans[ans.length - 1] !== arr1[i]) {
        ans.push(arr1[i]);
      }
      i++;
    } else {
      if (ans.length === 0 || ans[ans.length - 1] !== arr2[j]) {
        ans.push(arr2[j]);
      }
      j++;
    }
  }

  while (i < n1) {
    if (ans[ans.length - 1] !== arr1[i]) {
      ans.push(arr1[i]);
    }
    i++;
  }

  while (j < n2) {
    if (ans[ans.length - 1] !== arr2[j]) {
      ans.push(arr2[j]);
    }
    j++;
  }

  console.log(ans);
};

findUnion([1, 2, 3, 4], [1, 2, 3, 4, 5, 9]);
