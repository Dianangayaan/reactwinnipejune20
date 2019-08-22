let user = {
    username : 'batman',
    password : 'Alfred1960ROCKS!',
};
console.log(user.username);
console.log(user.password);
user.username = user.username.toUpperCase();
user.password = user.password.slice(0,6).concat(` ${user.password.substr(10,17)}`);
console.log(user.username);
console.log(user.password);