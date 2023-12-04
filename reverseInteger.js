//Reverse the integer = -321
// Output = -123

function revInt(num){
    let myRevNum = num.toString().split("").reverse().join("");
    if(myRevNum.endsWith ("-")){
        myRevNum = "-" + myRevNum;
        return parseInt(myRevNum);
    }else{
        return parseInt(myRevNum);
    }
}

console.log(revInt(-123));