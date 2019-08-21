let mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];
for (let index = 0; index <= mutants.length - 1; index++){
    if (mutants.indexOf('Magneto') > -1) {
       break;
    }
    console.log(mutants[index]); 
}
let indexOfMagneto = mutants.indexOf('Magneto');
while (indexOfMagneto <= ( mutants.length-2)){
    mutants[indexOfMagneto]= mutants[indexOfMagneto + 1];
    indexOfMagneto++;
    if (indexOfMagneto === mutants.length-1){
        mutants.pop();
    }
}
for (let index = 0; index <= mutants.length - 1; index++){
    if (mutants.indexOf('Magneto') > -1){
 break;
    }
    console.log(mutants.indexOf(`${mutants[index]}`)); 
    console.log(mutants[index].toUpperCase());
}