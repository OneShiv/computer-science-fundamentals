import { fibo, getFibonacciRecurrsive } from "./fibonacci";

test("should return 8 for fibonacci of 6", () => {
  expect(getFibonacciRecurrsive(6)).toEqual(8);
});

test("should return 13 for fibonacci of 7", () => {
  expect(fibo(7)).toEqual(13);
});
