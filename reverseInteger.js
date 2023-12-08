//Reverse the integer = -321
// Output = -123

// function revInt(num){
//     let myRevNum = num.toString().split("").reverse().join("");
//     if(myRevNum.endsWith ("-")){
//         myRevNum = "-" + myRevNum;
//         return parseInt(myRevNum);
//     }else{
//         return parseInt(myRevNum);
//     }
// }

//let revInt = num.toString().split("").reverse("").join("")

//console.log(revInt(-123));

let number = 56123;
function reverseNum(number){
    if (number < 10) {
        console.log(number)
        return;
    } else {
        console.log(parseInt(number % 10));
       let reverseNumber =  reverseNum(number / 10);
       return parseInt(reverseNumber);
    }
}

return reverseNum(number);

// function reverseNumber(number) {
//     // Convert the number to a string
//     let numberString = number.toString();
  
//     // Reverse the characters
//     let reversedString = " ";
//     for (let i = numberString.length - 1; i >= 0; i--) {
//       reversedString += numberString[i];
//     }
  
//     // Convert the reversed string back to a number
//     let reversedNumber = parseInt(reversedString, 10);
  
//     return reversedNumber;
//   }
  
//   // Example: Reverse the number 12345
//   let originalNumber = 12345;
//   let reversedNumber = reverseNumber(originalNumber);
//   console.log(reverseNumber(12345));