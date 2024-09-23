function primeFactor(n) {
  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) {
      console.log(i);
    }
  }
}

primeFactor(10);

function isPrime(n) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }

  return count === 2;
}
