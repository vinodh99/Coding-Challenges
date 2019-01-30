// Permutations

// permutations('a'); // ['a']




function permutationss(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
     uniq = [...new Set(results)]
    return uniq;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = permutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
 uniq = [...new Set(results)]
  return  uniq;
;
}


//  best practice

function permutations(string) {
	console.log("here",string)
  var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
  if(string.length == 1) return [string];
  arr.forEach(function(v, i, arr) {
    if(heads.indexOf(v) == -1) {
		// console.log(heads)
//       heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
      tmp.push(v);
    }
  });
  return out;
}
console.log(permutations('dcba')) // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

