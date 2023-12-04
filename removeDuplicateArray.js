console.log(removeDuplicateNos([1,2,3,4,5,8,1,3,2]));

function removeDuplicateNos(arr) {
    return [...new Set(arr)];
}
