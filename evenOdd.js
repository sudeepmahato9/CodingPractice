const numbers = [5,9,15,25,30,50];

const even = numbers.filter((item) => {
    return item%2 === 0;
})

const odd = numbers.filter((item) => {
    return item%2 !== 0;
})

console.log('Even Number:', even);
console.log('Odd Number:', odd);
