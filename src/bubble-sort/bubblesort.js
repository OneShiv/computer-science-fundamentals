export const bubbleSort = (arr) => {
  for (let iteratorOuter = 0; iteratorOuter < arr.length; iteratorOuter++) {
    for (
      let iteratorInner = 0;
      iteratorInner < arr.length - 1;
      iteratorInner++
    ) {
      if (arr[iteratorInner] > arr[iteratorInner + 1]) {
        const temp = arr[iteratorInner];
        arr[iteratorInner] = arr[iteratorInner + 1];
        arr[iteratorInner + 1] = temp;
      }
    }
  }
  return arr;
};
