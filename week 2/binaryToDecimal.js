function binaryToDecimal(n) {
  let sum = 0,
    power = 1; // 2^0
  while (n > 0) {
    let lastDigit = n % 10;

    sum += lastDigit * power;

    power *= 2;

    n = Math.floor(n / 10);
  }

  console.log(sum);
}

binaryToDecimal(101);
