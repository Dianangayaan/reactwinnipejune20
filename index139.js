let numbers = [150];
for (let x = 0; x < 150; x++) {
    numbers[x] = x + 1;
};
let even = numbers.filter(function(number){
    return number % 2 === 0;
});
let odd = numbers.filter(function(number){
    return number % 2 !== 0;
});
console.log('The last 10 odd numbers');
for (let x = odd.length - 1; x >= odd.length - 10; x--){
    console.log(odd[x]);
};
console.log('the last 20 even numbers');
for (let x = even.length - 1; x >= even.length - 20; x--){
    console.log(even[x]);
};