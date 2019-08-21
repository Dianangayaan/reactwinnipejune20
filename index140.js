let mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
let filteredList = mutants.filter(function(mutants){
    return ((mutants !== 'Magneto') && (mutants !== 'Iceman') && (mutants !== 'Gambit'));
});
console.log('Mutants List:', mutants)
console.log('Filtered List:', filteredList);