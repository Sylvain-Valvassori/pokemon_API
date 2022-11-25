const number = 4;

const star = "*";
const dot = ".";
let i = 0;



while (i <= number) {

    let res = star.repeat(i) + dot.repeat(number - i);
    console.log(res);
    i++;
}

//========================================================================


const numbers = [1, 2, 3, 4, 5];

console.log(numbers);

//EXO #1
const doubleArray = numbers.map( e => e *2);

console.log(doubleArray);


//EXO #2
const evenArray = numbers.filter( e => e % 2 == 0);
const oddArray = numbers.filter( e => e % 2 != 0);

console.log(evenArray);
console.log(oddArray);


//EXO #3
const maxValueArray = numbers.reduce((max, e) => Math.max(max, e));
const minValueArray = numbers.reduce((min, e) => Math.min(min, e));

console.log(maxValueArray);
console.log(minValueArray);


//EXO #4
const sumValueArray = numbers.reduce((sum, e) => sum + e);

console.log(sumValueArray);


//EXO #5
const isOddValueArray = numbers.filter( e => e % 2 != 0).length != 0;

console.log(isOddValueArray);

//========================================================================


