//console.log(findLargestWord("I love Javascript"));

// function findLargestWord(sentence){
//     const words  = sentence.split(" ");
//     let largestword = "";
//     for(let word of words){
//         if(word.length > largestword.length) {
//             largestword = word;
//         }
//         return largestword;  
//     }
// }

// function getLongestWord(str){
//     let words = str.split(' ');
//     let maxLength = 0;
//     let longestWord = ' ';
  
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//         longestWord = words[i];
//       }
//     }
  
//     console.log(maxLength);
//     console.log(longestWord);
  
//   }

// getLongestWord(" I love Javascript ");

function getLongestWord(str){
    let words = str.split(' ');
    let maxLength = 0;
    let longestWord = ' ';
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWord = words[i];
      }
    }
  
    console.log(maxLength);
    console.log(longestWord);
  
  }

getLongestWord(" I love Javascript ");