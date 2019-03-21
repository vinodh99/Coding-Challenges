// pancake sort

function panCake(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let pivot = maxIndex(arr, i);
    console.log(pivot);
    flip(arr, pivot);
    flip(arr, i);
  }
  return arr;
}

function flip(arr, k) {
  for (let i = 0; i < Math.floor(k + 1 / 2); i++) {
    let tmp = arr[i];
    arr[i] = arr[k - i];
    arr[k - i] = tmp;
  }
}

function maxIndex(arr, k) {
  let index = 0;
  for (let i = 0; i <= k; i++) {
    if (arr[index] < arr[i]) {
      index = i;
    }
  }
  return index;
}

console.log(panCake([4, 5, 3, 6, 2, 1]));
// arr=[5,3,4,2,1]
//
