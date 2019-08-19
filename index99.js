let result = 0;
let number = 0;

for ( let number = 0; number < 1000; number++){
    if (number < 20) {
    if ((number % 2) === 0) {
        number= number + 1;
    result = result + number;
    }
    }else {
        break;
    }
}
console.log(result,'"break after finding the first 20 even numbers"');