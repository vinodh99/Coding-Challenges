function isSolved(board) {
  //check for wins
  for (let i = 0; i <= 2; i++){
    //check vertical win
    if (board[0][i] == board[1][i] && board[0][i] == board[2][i] && board[0][i] !== 0){
      return board[0][i];
    }
    //check horizontal win
    if (board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][0] !== 0){
      return board[i][0];
    }
  }
  //check diagonal
  if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] !== 0){
    return board[0][0];
  }
  //other diagonal
  if (board[2][0] == board[1][1] && board[2][0] == board[0][2] && board[2][0] !== 0){
    return board[2][0];
  }
  //check for unsolved board
  for (let i = 0; i <= 2; i++){
    for (let j = 0; j <= 2; j++){
      // console.log(i, j)
      if (board[i][j] === 0){
        return -1;
      }
    }
  }
  //by default, the only thing left is a cat
  return 0;
}




var board = [
 [1,2,1],[1,1,2],[2,2,0]
];
console.log(isSolved(board));
