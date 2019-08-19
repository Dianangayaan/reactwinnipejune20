let f0 = 0;
let f1 = 1;
let f2 = 1;

console.log(f1);

let x = 10;
let y = 2;

for (let y = 2; y <= x; y++){
f2 = f1 +f0 ;
console.log(f2);
f0 = f1;
f1 = f2;  
}