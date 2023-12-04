let str1 = "I love Apple";
let str2 = "I love Orange";
//Output: "I I love love Apple Orange";

let arr1 = str1.split(" ");
let arr2 = str2.split(" ");

let result = [...arr1[0,0], ...arr2[0,0], ...arr1[1,1], ...arr2[1,1], ...arr1[2,2], ...arr2[2,2]].join(" ");
console.log(result);