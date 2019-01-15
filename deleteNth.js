// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. 
// For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2],
// drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].


// function deleteNth(arr,n){
//   // ...
//     for(let element1 of arr){
//     let k=0;
//       for(let i in arr){
//         if(arr[i]===element1){
//           k++;
//           }
//         if(k>=n+1){
//             console.log("this"+arr)
//             arr.splice(i,1);
//             i--;
//           }
//         }
//       }
//       console.log(arr)
//       return arr;
// }

// deleteNth([5,66,11,232,222,11,11,232,11,11,1,2,3,2,2,3,1,2,3,4,5], 2)

function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}


deleteNth([5,66,11,232,222,11,11,232,11,11,1,2,3,2,2,3,1,2,3,4,5], 2);