// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

function nextBigger(n){
  let num =n.toString().split("")
  let arr=num.map(Number);
  let array=arr
  let array1=[];
  console.log(arr)
  for(let j=arr.length-1;j>=0;j--){
  for(let i=arr.length-1;i>=0;i--){
      // if(arr[i]>arr[i-1]){
        let temp= arr[i]
        arr[i]=arr[i-1];
        arr[i-1]=temp;
            // console.log(Number(arr.join("")))

          if(Number(arr.join(""))>n){
            // console.log(arr.join(""))
            array1.push(Number(arr.join("")));
          }
      }          
      // }
      arr=array;
    }
    console.log(array1)
  // return -1;
  }

  nextBigger(8726510)

  // expexted 8750126

  // best solution

  const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

function nextBigger(n){
  
  let arr = sortedDigits(n);
  let max = parseInt(arr.join(''), 10);
  
  for(var i = n + 1; i <= max; i++){
    if(sortedDigits(i).every((x, j) => x === arr[j])){
      return i;
    }
  }
  
  return -1;
}