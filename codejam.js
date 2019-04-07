var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var testCases;
var testCase = 1;

rl.on("line", function(line) {
  if (testCases === undefined) {
    testCases = parseInt(line);
    return;
  }

  let values = line.split(" ");
  var d = parseInt(values[0]);
  let s = d.toString();
  let second = [];
  let orig = s.split("");
  let k = 0;

  for (let i = 0; i < orig.length; i++) {
    let val = orig[i];
    if (val == "4") {
      orig[i] = "3";
      second[k++] = "1";
    } else {
      second[k++] = "0";
    }
  }

  let res = [];
  res[0] = orig.join("");
  res[1] = trimzeros(second.join(""));

  function trimzeros(source) {
    console.log(source.replace(/^0+/, ""));
    return source.replace(/^0+/, "");
  }
  console.log("Case #" + testCase + ": " + res[0] + " " + res[1] + "");

  testCase++;
  if (testCase > testCases) {
    process.exit();
  }
});
