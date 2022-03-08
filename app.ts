// function add(n1 : number, n2 : number) {
//     return n1 + n2;
// }

// const number1 = 5;
// const number2 = 2.8;

// const result = add(number1, number2);
// console.log(result);

// function add(n1 : number, n2 : number) {
//     if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//        throw new Error('Incorrect input')
//     }
//     return n1 + n2;
// }

// const number1 = 5;
// const number2 = 2.8;

// const result = add(number1, number2);
// console.log(result);


function add(n1 : number, n2 : number, showResult: boolean) {
 const result = n1 + n2;
if (showResult){
    console.log(n1 + n2);
} else {
    return result;
}
}
const number1 = 5; // 5.0
const number2 = 2.8;
const printResult = true
const resultPhrase = 'Result is: ';

add(number1, number2, printResult);


