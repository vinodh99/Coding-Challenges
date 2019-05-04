function binarySearch(array, target, left = 0, right = array.length - 1) {
  let mid = Math.abs((left + right) / 2);
  console.log(mid);
  if (target === array[mid]) {
    return mid;
  } else if (target > array[mid]) {
    binarySearch(array, target, mid, right);
  } else if (target < array[mid]) {
    binarySearch(array, target, left, mid);
  } else {
    return -1;
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 4));
