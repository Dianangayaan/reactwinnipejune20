let mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast','Phoenix', 'Logan', 'Gambit'];
let symbol = mutants.map(function(addSymbol){
    if ((addSymbol === 'Professor X') || (addSymbol === 'Logan') || (addSymbol === 'Phoenix') || (addSymbol === 'Gambit')){
        return `<3 ${addSymbol}`;
    } else{
        return addSymbol;
    }
});
mutants.forEach(function(name,index) {
    console.log('The original mutant items:', name);
    console.log('The updated mutant items:', symbol[index]);  
});