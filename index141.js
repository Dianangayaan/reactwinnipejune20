let tripExpenses = [130,680,45];
let budget = tripExpenses.reduce(function(sum, currentValue){
    return sum + currentValue;
});
console.log('hotel:', tripExpenses[0], 'first item');
console.log('trip:', tripExpenses[1], 'second item');
console.log('meals:', tripExpenses[2], 'third item');
console.log('Total trip budget:', budget);