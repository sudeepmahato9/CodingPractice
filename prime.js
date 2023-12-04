function primeNumber(number){
    for(let i = 2; i<= number/2; i++){
        if(number%i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primeNumber(7));
console.log(primeNumber(9));