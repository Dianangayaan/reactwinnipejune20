let number = 0;

for (let x = 13; x >=number; x--) {

    let y= 1;
    let result = '';

    while (y <= x) {
    result = result + '*';
    y++;
    }
    console.log(result); 
}