export const getFibonacciRecurrsive = (n) => {
  if (n <= 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  return getFibonacciRecurrsive(n - 1) + getFibonacciRecurrsive(n - 2);
};

export const fibo = (n) => {
  const fiboArr = [0, 1, 1];
  if (n <= 0) {
    return fiboArr[0];
  }
  if (n === 1 || n === 2) {
    return fiboArr[0];
  }
  for (let i = 3; i <= n; i++) {
    fiboArr[i] = fiboArr[i - 1] + fiboArr[i - 2];
  }
  return fiboArr[n];
};
