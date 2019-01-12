// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// var sum_pairs=function(ints, s){
//     //your code here
//     for (let i in ints){
//       for (let j=i+1;j<=ints.length-1;j++){
//       	         console.log(ints[i])
//          if(ints[i]+ints[j]===s)
//          console.log(ints[j])
//         return ([ints[i], ints[i+1]]);
//       }
     
//     }
//     return null;
// }

// sum_pairs([1, 4, 8, 7, 3, 15], 10);


function sum_pairs(integers, sum) {
  var seenNumbers = {};
  for (var i = 0; i < integers.length; i++) {
    if (seenNumbers.hasOwnProperty(sum - integers[i])) {
      return [sum - integers[i], integers[i]];
    } else {
      seenNumbers[integers[i]] = true;
    }
  }
  return undefined;
}