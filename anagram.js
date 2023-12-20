// output : true

function areAnagrams(str1, str2) {
    const sortedStr1 = str1.toString().split("").sort().join("");
    const sortedStr2 = str2.toString().split("").sort().join("");
    return sortedStr1 == sortedStr2;
}

console.log(areAnagrams("abba","baba"));

// Token - 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
//git remote set-url origin https://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@github.com/sudeepmahato9/CodingPractice
// git remote set-url origin git@github.com:sudeepmahato9/CodingPractice.git