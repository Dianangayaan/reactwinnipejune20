let text = "game of thrones";

let firstChar ;
let secondChar ;
let thirdChar ;

firstChar = text.charAt();
secondChar = text.charAt(5);
thirdChar = text.charAt(8);

let result = firstChar.concat(secondChar,thirdChar);

result = result.toUpperCase();

console.log('The final result is :',result);
