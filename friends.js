function friend(friends){
  //your code here
  let arr=[];
  for (let i=0;i<friends.length-1; i++){
  if(friends[i].length===4){
  arr.push(friends[i]);
  }
  }
    return arr 

}
console.log(friend(['fdsf','fsdfd','fdsf']));


// simple solution
  return friends.filter(n => n.length === 4)