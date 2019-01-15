// TODO: Replace examples and use TDD(test driven development) development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();

describe("Solution", function(){
  it("should test for something", function(){
    Test.assertEquals("actual", "expected", "This is just an example of how you can write your own TDD tests");
  });
});


function rgb(r, g, b){
  // complete this function  
  function converter(color){
  if(color>255)
    color=255;
  if(color<0)
    color=0;
      let hex=color.toString(16);
      if(hex.length<2){
        hex="0"+hex;
      }
    return hex
  }
  
  let red=converter(r);
  let green=converter(g);
  let blue=converter(b);
  
  return (red+green+blue).toUpperCase();
}