// Do not edit the class below except
// for the breadthFirstSearch method.
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

  breadthFirstSearch(array) {
    // Write your code here.
    let arr = [];
    array.push(this.name);
    while (array.length) {
      let node = array.shift();
      array.push(...node.children);
      arr.push(this.name);
    }
    return arr;
  }
}

let node = new Node();
console.log(node.breadthFirstSearch());
// Do not edit the line below.

