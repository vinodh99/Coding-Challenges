// Permutations

// permutations('a'); // ['a']




function permutations(string) {
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

permutations('dcba'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

