function printFibnacci(n) {
  let firstTerm = 0,
    secondTerm = 1;

  console.log(firstTerm);
  console.log(secondTerm);

  while (n - 2 > 0) {
    let thirdTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = thirdTerm;
    console.log(thirdTerm);
    n--;
  }
}

printFibnacci(10);
