function biggerNumber(firstNumber,secondNumber){
    if (typeof firstNumber == "number" && typeof secondNumber == "number") {
        if (firstNumber > secondNumber){
            console.log (`Number ${firstNumber} is bigger than ${secondNumber}`);
        } else if (secondNumber > firstNumber) {
            console.log(`${secondNumber} is bigger than ${firstNumber}`);
        } else {
            console.log(`Both numbers are ${secondNumber}`);
        }
    } else {
        console.log(`error ${firstNumber} or ${secondNumber} are not number`);
    }
}
biggerNumber(3,5);
biggerNumber(6,3);
biggerNumber(2,2);