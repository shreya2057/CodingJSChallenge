function diff21(n){
  if(n<21){
    return Math.abs(n-21)
  } else{
    return Math.abs(n-21) * 2
  }
}

// console.log(diff21(3))


function parrotTrouble(talking, hour){
  if(hour>=0  && hour<=23){
    if(talking  && hour<7){
        return true;
    } else if (talking && hour>20){
        return true
    } else{
        return false
    }
  }
}
// console.log(parrotTrouble())

function makes10(a, b){
  if(a===10 || b===10){
    return true
  } else if((a+b)===10){
    return true
  } else{
    return false
  }
}


function nearHundred(n){
  if(Math.abs(100-n)<=10){
    return true
  } else if(Math.abs(200-n)<=10){
    return true
  } else{
    return false
  }
}

function posNeg(a, b, negative){
    if(negative){
        if(a<0 && b<0){
            return true;
        } else {
            return false;
        }
    }else{
        if((a<0 && b>=0) || (a>=0 && b<0)){
            return true
        } else{
            return false
        }
    }
}

function notString(str){
    var not = "not"
    if(str.indexOf(not)===0){
        return str
    } 
    else{
        return not+ " " + str
    }
}

function missingChar(str, n){
  if(str!== null){
    if(n>=0 && n<=(str.length-1)){
        if(n===0){
            return(str.slice(n+1));
        } else{
            return str.slice(0,n) + str.slice(n+1);
        }
        
    }
  }
}

function front3(str){
    var front;
    var final = ""
    if(str.length<3){
        front = str
    }else{
        front = str.slice(0,3)
    }
    for(var i=0; i<3; i++){
        final = final + front
    }
    return final
}

function backAround(str){
  var lastItem = str[str.length-1]
  return lastItem + str + lastItem
}

function or35(n){
  if(n>0){
    if(n%3===0 || n%5===0){
        return true;
    } else{
        return false;
    }
  }
}

function front22(str){
    var first_items = str.slice(0,2)
    return first_items + str + first_items
}

function startHi(str){
  if(str.indexOf("hi")===0){
    return true;
  } else{
    return false
  }
}

function icyHot(temp1, temp2){
  if((temp1<0 && temp2>100)||(temp1>0 && temp2<100)){
    return true;
  } else{
    return false;
  }
}


function in1020(a, b){
    if((a>=10 && a<=20)||(b>=10 && b<=20)){
        return true;
      } else{
        return false;
      }
}


function hasTeen(a, b, c){
    if((a>=13 && a<=19) || (b>=13 && b<=19) || (c>=13 && c<=19)) {
        return true;
    }else{
        return false;
    }
}

function loneTeen(a, b){
    var aisTeen = false;
    var bisTeen = false;
    if(a>=13 && a<=19){
        aisTeen = true;
    }
    if(b>=13 && b<=19){
        bisTeen =  true;
    }
    if(aisTeen && bisTeen){
        return false
    } else if(!aisTeen && !bisTeen){
        return false
    } else{
        return true
    }
}

function mixStart(str){
    if(str.indexOf("ix")===1){
        return true
    } else{ 
        return false
    }
}

function startOz(str){
  if(str.indexOf("oz")===0){
    return str.slice(0,2)
  }else if(str[0]==="o"){
    return str.slice(0,1)
  } else if(str[1]==="z"){
    return str.slice(1,2)
  }else{
    return ""
  }
}

function intMax(a, b, c){
  if(a>b && a>c){
    return a
  }else if(b>a && b>c){
    return b
  } else {
    return c
  }
}

function close10(a, b){
    var aClose = Math.abs(10-a)
    var bClose = Math.abs(10-b)
    if(aClose<bClose){
        return a
    }else if(aClose>bClose){
        return b
    }else{
        return 0
    }
}


function in3050(a, b){
    if(((a>=30 && a<=40)&&(b>=30 && b<=40))||((a>=40 && a<=50)&&(b>=40 && b<=50))){
        return true
    } else{
        return false
    }
}


function max1020(a, b){
    if((a>=10 && a<=20) && (b>=10 && b<=20)){
        if(a>b){
            return a
        }else{
            return b
        }
       
    }
    else if((a>=10 && a<=20)){
        return a
    }
    else if((b>=10 && b<=20)){
        return b;
    } else {
        return 0
    }
}


function stringE(str){
    var e = str.split("").filter((item)=> item ==="e").length;
    if(e===1 || e===3){
        return true;
    }else{
        return false;
    }
}

function lastDigit(a, b, c){
    if(a%10 === b%10){
      return true
    } else{
      return false
    }
  }

  function endUp(str){
    if(str.length <= 3){
      return str.toUpperCase();
    } else {
      var firstLetter = str.slice(0, str.length-1-2)
      var lastLetter = str.slice(str.length-1-2, str.length).toUpperCase()
      return firstLetter + lastLetter
    }
  }


  function everyNth(str, n){
    var string = [];
    for (var i=0; i<=str.length-1; i++){
      if(i%n===0){
        string.push(str[i])
      }
    }
    return string.join("")
  }