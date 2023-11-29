let value = 'abba';

const realValue = () => {
    let myRealVal = value.toString().split("").reverse().join("");
    let myStrVal = value.toString();

    if(myRealVal == myStrVal){
        console.log("Palindrome");
    } else {
        console.log("Not a palindrome");
    }
}

realValue();