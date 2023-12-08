console.log(reoveDuplicateChar("abcdefcde"));

function reoveDuplicateChar(str) {
    str1 = str.split("");

    return [...new Set(str1)].join("");
}