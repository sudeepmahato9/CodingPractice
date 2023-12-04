let arr = [1,2,3,4,5];
//const reverse = arr.reverse();
//const reverse = arr.toString().split("").reverse().join("");
const reverse = [...arr].reverse();

console.log(reverse);