function add() {
    let finalResult = 0;
    for (let index = 0; index <= arguments.length -1;index++) {
        finalResult = finalResult + arguments[index];
    };
    return finalResult;
};
console.log(add(1,2,3,4,5));
console.log(add(5,10,15,15,20,25,30,35,40,45));