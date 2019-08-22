let number = 1;
let x = 13;
do {
     let y = 1;
     let result = '';
     while (y <= x){
        result =  result + '*';
        y++;
     }
     console.log(result);
     x--;
} while (x >= number);