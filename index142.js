let firstPerson = ['Diana', 'Ngayaan','7 idlewild Bay', 27];
let secondPerson = ['Diana', 'Ngayaan','7 idlewild Bay', 27/];

const person1 = firstPerson.reduce(function(sum,first){
    return sum + first ;
});
const person2 = secondPerson.reduce(function(sum,first){
    return sum + first ;
});
console.log(person1);
console.log(person2);
if (person1 === person2){
    console.log('They are the same');
} else {
    console.log('They are diferent');
}