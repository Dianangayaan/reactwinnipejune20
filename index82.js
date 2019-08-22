let number = 13;
let x = 1;
do{
     let y = 1;
     let result = '';
     while (y <= x){
        result =  result + '*';
         y++;
     }
     console.log(result);
     x++;
} while (x <= number);