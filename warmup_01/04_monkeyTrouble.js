// monkeyTrouble
// We have two monkeys, a and b, and the parameters aSmile and bSmile 
// indicate if each is smiling. We are in trouble if they are both smiling 
// or if neither of them is smiling. Return true if we are in trouble.

function monkeyTrouble(aSmile, bSmile){
  if(aSmile && bSmile){
    return true;
  } else if(!aSmile && !bSmile){
    return true;
  } else{
    return false;
  }
}

console.log(monkeyTrouble(true,true))