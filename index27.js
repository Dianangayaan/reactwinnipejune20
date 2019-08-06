let firstNumber = 4;
let secondNumber = 2;
let templateAdd = `I added ${firstNumber} + ${secondNumber} and the result is`
let templatesub = `I subtract ${firstNumber} - ${secondNumber} and the result is`
let templatemul = `I multiply ${firstNumber} * ${secondNumber} and the result is`
let templatediv = `I divide ${firstNumber} / ${secondNumber} and the result is`
let templateremainder = `I divide ${firstNumber} / ${secondNumber} and the remainder result is`


console.log(templateAdd, '=', firstNumber + secondNumber );
console.log(templatesub, '=', firstNumber - secondNumber );
console.log(templatemul, '=', firstNumber * secondNumber );
console.log(templatediv, '=', firstNumber / secondNumber );
console.log(templateremainder, '=', firstNumber % secondNumber );