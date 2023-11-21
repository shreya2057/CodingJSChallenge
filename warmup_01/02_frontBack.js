// frontBack question
// Given a string, return a new string where the first and last chars have 
// been exchanged.

function frontBack(str){
    var forward = str.split("");
    var first_item = forward[0];
    var last_item = forward[[forward.length - 1]];
    var [first_item, last_item] = [first_item,last_item]
    forward.splice(0,1,last_item);
    forward.splice(forward.length-1, 1, first_item);
    return forward.join("")
}

console.log(frontBack("Chocolate"));