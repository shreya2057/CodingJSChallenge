function cigarParty(cigars, isWeekend){
  if(cigars >= 40 && cigars <= 60){
    return true
  } else if(isWeekend && cigars>=40){
    return true
  }else{
    return false
  }
}


function dateFashion(you, date){
    var result;
    if(you<=2 || date<=2){
        result = 0;
    } else if(you>=8||date>=8){
        result = 2;
    }
    else{
        result = 1;
    }
    return result
}

function squirrelPlay(temp, isSummer){
    var lower = 60;
    var upper;
    if(isSummer){
        upper=100
    } else{
       upper=90
    }
    if(temp>=lower && temp<=upper){
        return true;
    }else{
        return false
    }
}

function caughtSpeeding(speed, isBirthday){
    var result;
    var lower = 60;
    var upper = 81;
    if(speed<=60){
        result=0
    } else if(isBirthday){
        lower = lower + 5;
        upper = upper + 5;
        if(speed<=65){
            result = 0;
        }
        else if(speed>=(lower+1) && speed<= upper){
            result = 1;
        } else {
            result = 2;
        } 
    } else{
        lower = 60
        if(speed>=(lower+1) && speed<= upper){
            result = 1;
        } else {
            result = 2;
        } 
    }
    return result;
}

function sortaSum(a, b){
    var sum = a+b
    if(sum>=10 && sum<=19){
        return 20
    } else{
        return sum
    }
}

function alarmClock(day, vacation){
    if(vacation){
      if(day===0 || day===6){
        return "off"
      } else{
          return "10:00"
      }
    }else{
      if(day===0 || day === 6){
        return "10:00"
      }else{
        return "7:00"
      }
    }
 }


 function love6(a, b){
  if(a === 6 || b === 6){
    return true;
  } else if((a+b)===6 || Math.abs(a-b)===6){
    return true;
  } else{
    return false;
  }   
}


function in1To10(n, outsideMode){
    if(!outsideMode){
      if(n>=1 && n<=10){
        return true;
      } else{
        return false;
      }
    }else{
      if(n<=1 || n>=10){
        return true;
      } else{
        return false;
      }
    }
  }

  function specialEleven(n){
    if(n%11===0 || n%11===1){
      return true;
    } else{
      return false;
    }
  }

  function more20(n){
    if(n%20===1 || n%20===2){
        return true;
      } else{
        return false;
      }
  }

  function old35(n){
    if(n%3===0 && n%5===0){
          return false;
    } else if(n%3===0 || n%5===0){
          return true;
    }else{
      return false;
    }
  }


  function makeChocolate(small, big, goal){
    var bigkg = 5 * big
    var smallkg = 1
    var smallNeeded = goal - big * bigkg
    if(bigkg > goal){
      return small
    } else{
      if(smallNeeded % small===0){
        console.log(bigkg)
        // return smallNeeded
      }else{
        return -1
     }
    }
  }

  makeChocolate(9, 3, 18)