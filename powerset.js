function powerset(array) {
  let subsets = [[]];
  for (let ele of array) {
    let length = subsets.length;
    for (let i = 0; i < length; i++) {
      let currentSubset = subsets[i];
      subsets.push([...currentSubset, ele]);
    }
  }
  return subsets;
}

console.log(powerSet([1, 2, 3]));
