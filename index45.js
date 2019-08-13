let playerName = "Patrik Laine is lame";
let teams = "New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins";
let message = "Winnipeg is the best Canadian city, Go Winnipeg";

let result1 = playerName.slice(0, -7);
let result2 = message.slice(8, -26);
let result3 = teams.slice(45, -21)
let result4 = message.slice(34, -8);

let template =`${result2}${result3}player${result4}${result3}!!`

console.log(result1.toUpperCase(),template);