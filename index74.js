let number = 13;
let x = 1 ;

while (x <= number){

    if (x % 2 !== 0 ) {

        let y = 1;

        let result = ''; 

while (y <= x){

    result =  result + '*';
    y++;
    }
    console.log(result);
}
    x++;
}