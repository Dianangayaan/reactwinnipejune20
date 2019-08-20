let femaleStudents = ['brenda','diana','danica','elisa','gloria'];
let maleStudents = ['sam','gagandeep','hugo','sanyat','yuri'];
let students = femaleStudents.concat(maleStudents);
const sortedStudents = students.sort();
let index = 0;
while (index <= maleStudents.length-1){
    console.log(maleStudents[index]);
    index++;
} 
console.log();
for (let index = 0 ; index <= sortedStudents.length - 1; index++){
    console.log(sortedStudents[index].toUpperCase());
}