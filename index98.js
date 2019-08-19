let result = 0;

for (let number = 0; number<= 1000; number++){ 
    if (result > 400) {
    break;
} else {
    result = result + number;
}
} console.log(result,'"stop if the result is bigger than 400"');