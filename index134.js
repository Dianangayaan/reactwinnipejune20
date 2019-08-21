let numbers = [580];
for (let x = 0; x < 1000; x++){
    numbers[x] = x + 1;
};
let sum = 0;
for ( let x = 0; x <= numbers.length - 1; x++){
    sum += numbers[x];
    console.log(sum);
}
if (sum === 500500){
    console.log("Good job!!!");
}else{
    return ('Take a look to see if something is wrong');
}