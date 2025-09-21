/*
Write four functions that return the sum of the numbers in a given list using a for-loop, a while-loop, recursion, 
and Array functional programming. Call them sumFor, sumWhile, sumRecursion, and sumTheFunctionalWay. 
Add console.log statements to each function to show the result. For example, console.log(sumFor([1, 2, 3, 4])); 
should output 10. Check the output in the browser console.
*/

function sumFor(numArr: number[]): number {
  let total = 0;
  for(let i = 0; i < numArr.length; i++){
    total += numArr[i];
  }
  return total;
}

console.log(sumFor([1, 2, 3, 4]));

function sumWhile(numArr: number[]): number {
  let total = 0;
  let i = 0;
  
  while(i < numArr.length){
    total += numArr[i];
    i++;
  }
  return total;
}

console.log(sumWhile([1, 2, 3, 4]));

function sumRecursion(numArr: number[]): number {
  if(numArr.length === 0) return 0;
  return numArr[0] + sumRecursion(numArr.slice(1));
}

console.log(sumRecursion([1, 2, 3, 4]));

function sumTheFunctionalWay(numArr: number[]): number {
  return numArr.reduce((acc, curr) => acc + curr);
}

console.log(sumTheFunctionalWay([1, 2, 3, 4]));