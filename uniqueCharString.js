function findUnique(str) {
    str = str.split("");
    str = new Set(str);
    str = [...str].join("");
    return str;
}

console.log(findUnique('abcdcbefac'));