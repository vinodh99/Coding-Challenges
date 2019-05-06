// function powerset(array) {
//   let subsets = [[]];
//   for (let ele of array) {
//     let length = subsets.length;
//     for (let i = 0; i < length; i++) {
//       let currentSubset = subsets[i];
//       subsets.push([...currentSubset, ele]);
//     }
//   }
//   return subsets;
// }

console.log(powerset([1, 2, 3]));

// recursive solution

// time and space complexity o(n2^n)
function powerset(array, index = null) {
  if (index === null) {
    index = array.length - 1;
  } else if (index < 0) {
    return [[]];
  }
  let ele = array[index];
  let subset = powerset(array, index - 1);
  console.log(subset);
  for (let i = 0, len = subset.length; i < len; i++) {
    let currentSubset = subset[i];
    subset.push([...currentSubset, ele]);
  }
  return subset;
}
