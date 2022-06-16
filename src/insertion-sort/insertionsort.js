export const insertionSort = (arr) => {
  let index = 1;
  for (let i = index; index < arr.length; i++) {
    let temp = arr[i];
    let itr = i;
    for (let j = i; j - 1 >= 0; j--) {
      if (temp < arr[j - 1]) {
        itr = j - 1;
        arr[j] = arr[j - 1];
      }
    }
    if (itr != i) {
      arr[itr] = temp;
    }
    console.log(arr);
    index++;
  }

  return arr;
};

// use case when array is mostly sorted
// time complexity worst case : O(n^2)
