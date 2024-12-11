const rotate1 = (arr) => {
  const n = arr.length,
    temp = arr[0];
  let i = 1;
  while (i < n) {
    arr[i - 1] = arr[i];
    i++;
  }

  arr[n - 1] = temp;

  console.log(arr);
};

rotate1([1, 2, 3, 4, 5]);
