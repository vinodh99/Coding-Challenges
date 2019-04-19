function balancedBrackets(string) {
  // Write your code here.
  console.log(string);
  let arr = [];
  let opening = "{[(";
  let closing = "}])";
  let matching = { ")": "(", "}": "{", "]": "[" };
  for (let char of string) {
    if (opening.includes(char)) {
      arr.push(char);
    } else if (closing.includes(char)) {
    }
  }
  return true;
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
