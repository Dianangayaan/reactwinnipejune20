function even(evenNumber){
    return (evenNumber % 2);
}
function result(number){
    if (even(number)){
        console.log(`${number} is odd number`);
    } else {
        console.log(`${number} is even number`);
    }
}
result(2);
result(5);
result(3);
result(24);
result(12);