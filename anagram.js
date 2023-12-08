// output : true

function areAnagrams(str1, str2) {
    const sortedStr1 = str1.toString().split("").sort().join("");
    const sortedStr2 = str2.toString().split("").sort().join("");
    return sortedStr1 == sortedStr2;
}

console.log(areAnagrams("abba","baba"));