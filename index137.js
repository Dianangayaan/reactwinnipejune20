let numbers = [380];
for (let x = 0; x < 380; x++){
    numbers[x] = x + 1;
};
let increment = numbers.map(function(number){
    return number + 10;
});
numbers.forEach(function(value,index){
    console.log('index:', index + 1, 'original number:', value, 'incremented value:', increment[index]);
});