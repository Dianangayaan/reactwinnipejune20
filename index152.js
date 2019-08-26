const user = {
    userName: null,
    password: null,
    greet: function(){
        if (this.userName === null){
            console.log('Please assign a username value');
        } else {
            console.log(`Hello , I'm user ${this.userName}`);
        };
    },
    updateUsername: function(userName){
        if (typeof userName === "string"){
            this.userName = userName;    
        } else {
            console.log('Please input a string value');
        };
    },
    updatePassword: function(password){
        if (typeof password === "string"){
            this.password = password;    
        } else {
            console.log('Please input a string value');
        };
    },
};
user.greet();
user.updatePassword("qwerty");
user.updateUsername("Diana");
user.greet();

