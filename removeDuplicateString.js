console.log(reoveDuplicateChar("abcdefcde"));

function reoveDuplicateChar(str) {
    str = str.split("");

    str = new Set(str);

    str = [...str].join("");

    return str;
}