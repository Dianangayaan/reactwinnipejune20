let number = 13;

for (let x = 0; x <=number; x++) {

    let y= 1;
    let result = '';

    while (y <= x) {
    result = result + '*';
    y++;
    }
    console.log(result); 
}