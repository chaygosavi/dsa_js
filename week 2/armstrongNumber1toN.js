function power(a, b) {
  let answer = 1;
  for (let i = 1; i <= b; i++) {
    answer = answer * a;
  }
  return answer;
}

function isArmstrongNumber(n) {
  const copyOfN = n;
  let numberOfDigits = n.toString().length,
    sum = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    sum += power(lastDigit, numberOfDigits);
    n = Math.floor(n / 10);
  }

  if (sum === copyOfN) {
    return true;
  } else {
    return false;
  }
}

function printArmstrongs(start, end) {
  for (let i = start; i <= end; i++) {
    if (isArmstrongNumber(i) === true) {
      console.log(i);
    }
  }
}

printArmstrongs(1, 1999);
