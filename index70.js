let number1 = 0;
let number2 = 0;

while (number1 <= 1000) {
    if ((number1 % 2 ) !== 0) {
        number2 = number2 + number1;

        console.log(number2);
    };
    number1++;
}