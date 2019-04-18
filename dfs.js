// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (let child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

// Do not edit the line below.
// test cases

​const program = require("./program");
const chai = require("chai");

const test1 = new program.Node("A");
test1.addChild("B").addChild("C");
test1.children[0].addChild("D");

const test2 = new program.Node("A");
test2.addChild("B").addChild("C").addChild("D").addChild("E");
test2.children[1].addChild("F");

const test3 = new program.Node("A");
test3.addChild("B");
test3.children[0].addChild("C");
test3.children[0].children[0].addChild("D").addChild("E");
test3.children[0].children[0].children[0].addChild("F");

const test4 = new program.Node("A");
test4.addChild("B").addChild("C").addChild("D");
test4.children[0].addChild("E").addChild("F");
test4.children[2].addChild("G").addChild("H");
test4.children[0].children[1].addChild("I").addChild("J");
test4.children[2].children[0].addChild("K");

const test5 = new program.Node("A");
test5.addChild("B").addChild("C").addChild("D").addChild("L").addChild("M");
test5.children[0].addChild("E").addChild("F").addChild("O");
test5.children[1].addChild("P");
test5.children[2].addChild("G").addChild("H");
test5.children[0].children[0].addChild("Q").addChild("R");
test5.children[0].children[1].addChild("I").addChild("J");
test5.children[2].children[0].addChild("K");
test5.children[4].addChild("S").addChild("T").addChild("U").addChild("V");
test5.children[4].children[0].addChild("W").addChild("X");
test5.children[4].children[0].children[1].addChild("Y").addChild("Z");

it('Test Case #1', function() {
  chai.expect(test1.depthFirstSearch([])).to.deep.equal(["A", "B", "D", "C"]);
});

it('Test Case #2', function() {
  chai.expect(test2.depthFirstSearch([])).to.deep.equal(["A", "B", "C", "F", "D", "E"]);
});

it('Test Case #3', function() {
  chai.expect(test3.depthFirstSearch([])).to.deep.equal(["A", "B", "C", "D", "F", "E"]);
});

it('Test Case #4', function() {
  chai.expect(test4.depthFirstSearch([])).to.deep.equal(["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]);
});

it('Test Case #5', function() {
  chai.expect(test5.depthFirstSearch([])).to.deep.equal(["A", "B", "E", "Q", "R", "F", "I", "J", "O", "C", "P", "D", "G", "K", "H", "L", "M", "S", "W", "X", "Y", "Z", "T", "U", "V"]);
});
