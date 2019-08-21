let mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast','Phoenix', 'Logan', 'Gambit'];
let index = '';
mutants.forEach(function(string){
if ((string === ('Iceman')) || (string === ('Logan')) || (string === ('Phoenix'))){
    index += `${string} `;
    console.log('the generated string with the selected mutants names:',index) ;
    }
});