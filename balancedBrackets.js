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
        if(!arr.length){
            return false;
        }
        else if(arr[arr.length-1]===matching[char]){
            arr.pop();
        } else{
            return false;
        }
    }
  }
  return arr.length===0;
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
