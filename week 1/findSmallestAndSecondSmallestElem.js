const findSmallestAndSecondSmallest = (arr) => {
  let minSoFar = Infinity,
    secondMin = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minSoFar) {
      secondMin = minSoFar;
      minSoFar = arr[i];
    } 

    if(arr[i] > minSoFar && arr[i] < secondMin) {
      secondMin = arr[i];
    }
  } 

  if(secondMin === Infinity) {
    minSoFar = -1
    secondMin = -1
  }

  console.log(minSoFar, secondMin);
};

findSmallestAndSecondSmallest([5, 15, 14, 5, 16, 17, 5, 17, 3, 8, 17, 4, 9]);
