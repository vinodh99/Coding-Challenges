pyramid = k => {
  arr2 = [];
  result = [];
  for (let j = 0; j < k; j++) {
    let arr = [];
    let acc = [];
    for (let i = 0; i <= j; i++) {
      arr.slice(i, i + k);
    }
    list = reducer(i);
    arr2.push(list);

    reducer = i => {
      arr2.reduce((acc, item) => {
        return array;
      }, []);
    };
    return result;
  }
};

// [1]
// [1,1]
// [1,2,1]
// [1,3,3,1]
