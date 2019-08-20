function validateUser(userName,passWord){
    return ((userName === 'nacho' && passWord === 'Nerd1979') || (userName === 'pedro' && passWord === 'Batman0217') || (userName === 'marta' && passWord === 'Mother2312'));
}
let userName = 'Diana';
let passWord = 'almonds1234';
if (validateUser(userName,passWord)){
    console.log('welcome', userName, 'nice to see you again');
} else console.log('Please input valid credentials');