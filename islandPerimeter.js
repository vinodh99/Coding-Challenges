// this is a leetcode challenge

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(array) {

    // let array = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];

let perimeter = 0;

for (let i = 0; i < array.length; i++) {
 for (let j = 0; j < array[0].length; j++) {
   if (array[i][j] === 1){
     perimeter += 4;
     let up = i - 1;
     let left = j - 1;
     let right = j + 1;
     let down = i + 1;
       
     if (up >= 0 && array[up][j] === 1) perimeter--;
     if (right < array[0].length && array[i][right] === 1) perimeter--;
     if (down < array.length && array[down][j] === 1) perimeter--;
     if (left >= 0 && array[i][left] === 1) perimeter--;
   }
 }
}
    return perimeter
};

console.log(islandPerimeter([
    [1,0,0,0],
    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,1]
    ]))