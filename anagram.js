/*
NAME:  ANAGRAM
AUTHOR: NDIFE U.S
DATE: 2nd May 2018
FOR: NODE JS CLASS
PURPOSE: THE PROGRAM TO COMPARE TWO STRING AND OUTPUT TRUE,
          IF THERE ARE THE SAME OR FALSE, IF OTHERWISE.
*/

function Anagram(firstWord, secondWord){
firstValue=[];
secondValue=[];

    if (typeof(firstWord && secondWord)=="string"){
       
       if(firstWord.length==secondWord.length){
           
           for(var i=0; i<=firstWord.length-1; i++){
               firstValue.push(firstWord.charAt(i).toUpperCase());
           }
            for(var i=0; i<=secondWord.length-1; i++){
               secondValue.push(secondWord.charAt(i).toUpperCase());
           }
           firstValue.sort();
           secondValue.sort();
           if(firstValue.join()===secondValue.join()){
               return "true";
           }else{
               return "false";
           }
           
       }
       else{
           return "strings does not have the same length";
       }
    }else{
        return "please strings only.";
    }
}

console.log (Anagram("nam", "man"));
console.log (Anagram("leg", "del"));
console.log (Anagram("game", "games"));
console.log (Anagram("give", 1));