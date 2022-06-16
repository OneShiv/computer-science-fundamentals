import { insertionSort } from "./insertionsort";

test("insertion-sort", () => {
  const nums = [10, 5, 3, 8, 6, 4, 7, 9, 1];
  const sortedNums = insertionSort(nums);
  expect(sortedNums).toEqual([1, 3, 4, 5, 6, 7, 8, 9, 10]);
});
