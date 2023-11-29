console.log(areAnagrams("abba","baba"));
// output : true

function areAnagrams(str1, str2) {
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");
    return sortedStr1 == sortedStr2;
}