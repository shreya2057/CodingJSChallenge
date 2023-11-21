// diff21 Question
// Given an int n, return the absolute difference between n and 21, except 
// return double the absolute difference if n is over 21.

function diff21(n){
    if(n<21){
      return Math.abs(n-21);
    } else{
      return Math.abs(n-21) * 2;
    }
  }
  
console.log(diff21(19));
console.log(diff21(10));
console.log(diff21(21));