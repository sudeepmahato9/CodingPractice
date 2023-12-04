//Seperate [1,2,S,D,4,W,P,7] in 2 seperate arrays for numbers and characters

const inputArray = [1,'S','D',2,];
const number  = [];
const char = [];

    for(let element of inputArray){
        if(typeof element === 'number'){
            number.push(element);
        } else if (typeof element === "string" && element.length === 1){
            char.push(element);
        }
    }

console.log(number);
console.log(char);