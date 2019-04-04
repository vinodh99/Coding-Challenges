// [5,4,8,9,3,15]
// given an array find the maximum profit

// find max
// then find the maximum difference
// then find t

let arr = [5, 4, 8, 9, 3, 12, 11, 1];
let profit = 0;
function stock(arr, start = 0, end = arr.length) {
  let max = findMax(arr, start, end);
  for (let i = 0; i <= max; i++) {
    if (arr[max] - arr[i] > profit) {
      profit = arr[max] - arr[i];
    }
  }
  if (arr.length - 1 - max) {
    stock(arr, max + 1);
  }
  console.log(profit);
}

function findMax(arr, start, end) {
  let max = 0;
  for (i = start; i < end; i++) {
    if (max < arr[i]) {
      max = i;
    }
  }
  return max;
}

stock(arr);
