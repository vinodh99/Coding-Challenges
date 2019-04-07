// public class Solution {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int t = sc.nextInt();
//        for (int i = 1; i <= t; i++) {
//            int n = sc.nextInt();
//            // flush
//            sc.nextLine();
//            String rivalPath = sc.nextLine();
//            String answer = solve(rivalPath);
//            System.out.println("Case #" + i + ": " + answer + "");
//        }
//    }

//    public static String solve(String rivalPath) {
//        char[] arr = rivalPath.toCharArray();
//        char[] res = new char[rivalPath.length()];
//        int k = 0;
//        for (char c : arr) {
//            res[k++] = (c == 'S') ? 'E' : 'S';
//        }
//        return String.valueOf(res);
//    }
// }

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

  function solve(val) {
    let arr = val.split("");
    let res = [],
      length = arr.length;
    for (let i = 0; i < length; i++) {
      res[i] = arr[i] === "S" ? "E" : "S";
    }
    return res.join("");
  }
  let values = line.split(" ");
  var s = values[0];
  var answer = solve(s);
  console.log("Case #" + testCase + ": " + answer + "");
  testCase++;
  if (testCase > testCases) {
    process.exit();
  }
});
