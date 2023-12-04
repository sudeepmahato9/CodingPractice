const str = "Interview,    Happy";

function removeWhiteSpace(str) {
    const result = str.replace(/\s/g, "");
    return result;
}

console.log(removeWhiteSpace(str));