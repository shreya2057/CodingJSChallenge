// delDel
// Given a string, if the string "del" appears starting at index 1, 
// return a string where that "del" has been deleted. 
// Otherwise, return the string unchanged.

function delDel(str){
    var substring = "del" ;
    var subLength = substring.length;
    var index = str.indexOf(substring);
   if(index===1){
        var first_letter = str.slice(0,index);
        var remaining_letter=str.slice(index+subLength,str.length);
        return first_letter+remaining_letter
   } else {
        return str
   }
}

console.log(delDel("sadadelb"))