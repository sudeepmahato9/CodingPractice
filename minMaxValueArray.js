function findMinMax() {
    let arr = [10,20,30,50,80,100];
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);

    console.log("Minimum value of array is:" +minValue);
    console.log("Maximum value of array is:" +maxValue);
}

findMinMax();